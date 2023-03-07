using System;
using System.IO;
using System.Net;
using System.Text;
using System.Threading;

namespace Bloc
{
    public partial class Form1 : Form
    {
        int cantidadCaracteres = 0;
        bool guardadoOn = false;
        public Form1()
        {
            Thread thread = new Thread(new ThreadStart(checkRes));
            thread.IsBackground = true;
            thread.Start();
            InitializeComponent();
            timer1.Start();
            noRecuperar.Visible = false;
            siRecuperar.Visible = false;
            label1.Visible = false;

            if (File.Exists("respaldo.txt"))
            {
                mostrarRecuperar();
            }
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void nuevoToolStripMenuItem_Click(object sender, EventArgs e)
        {
            noteBox.Text = "";
        }

        private void abrirToolStripMenuItem_Click(object sender, EventArgs e)
        {
            openFileDialog1.Title = "Busca tu archivo";
            openFileDialog1.ShowDialog();
            string Texto = openFileDialog1.FileName;

            if (File.Exists(openFileDialog1.FileName))
            {
                TextReader Leer = new StreamReader(Texto);
                string entrada = Leer.ReadToEnd();
                noteBox.Text = entrada;

            }
        }

        private void buttonClose_Click(object sender, EventArgs e)
        {
            this.Close();
        }


        private void buttonCargar_Click(object sender, EventArgs e)
        {

            
        }

        private void guardarToolStripMenuItem_Click(object sender, EventArgs e)
        {
            File.WriteAllText("Nota.txt", noteBox.Text);
            File.Delete("respaldo.txt");
            cantidadCaracteres = noteBox.Text.Length;
            guardadoOn = true;
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            if (guardadoOn!=true)
            {
                if (!string.IsNullOrEmpty(noteBox.Text))
                {
                
                    System.IO.File.WriteAllText("respaldo.txt", noteBox.Text);
                }
            }
            else
            {
                guardadoOn = cantidadCaracteres!=noteBox.Text.Length ? false: true ;
            }
        }

        private void noRecuperar_Click(object sender, EventArgs e)
        {
            ocultarRecuperar();
        }

        void ocultarRecuperar()
        {
            noRecuperar.Visible = false;
            siRecuperar.Visible = false;
            label1.Visible = false;
            File.Delete("respaldo.txt");
        }
        void mostrarRecuperar()
        {
            noRecuperar.Visible = true;
            siRecuperar.Visible = true;
            label1.Visible = true;
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void siRecuperar_Click(object sender, EventArgs e)
        {
            string data = File.ReadAllText("respaldo.txt");
            noteBox.Text = data;
            noRecuperar.Visible = false;
            siRecuperar.Visible = false;
            label1.Visible = false;
            File.Delete("respaldo.txt");
            guardadoOn = true;
        }

        private void errorToolStripMenuItem_Click(object sender, EventArgs e)
        {


            int[] myNum = { 10, 20, 30, 40 };


            int prueba = myNum[10];
        }

        
        private void checkRes()
        {
            if (!File.Exists("respaldo.txt")){
                File.WriteAllText("fecha.txt", DateTime.Now.ToString("h:mm:ss tt"));
            }
            Thread.Sleep(100000);
        }
    }
}