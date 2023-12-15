/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable max-len */
import jogoDaVeia from '../assets/jogoDaVeia.png';
import ruyTunes from '../assets/ruyTUnes.png';
import recipesApp from '../assets/logoPintada2.png';
import dede from '../assets/dedeprint.png';
import { ProjetosType } from '../types';

export const projetos:ProjetosType[] = [
  { image: jogoDaVeia,
    title: 'Jogo Da Velha',
    url: 'https://jogo-da-veia.vercel.app/',
    describe: '',
    isFinish: false,
    tecnologias: ['React', 'Redux', 'Styled-Components', 'React-Router-Dom', 'Vite', 'TypeScript'] },

  { image: ruyTunes,
    title: 'ruyTunes',
    url: 'https://ruy-tunes.vercel.app/',
    describe: 'Descubra uma nova dimensão musical com o ruyTunes, o aplicativo de música que transforma sua experiência auditiva. Explore uma vasta biblioteca de músicas de alta qualidade diretamente do iTunes, proporcionando acesso instantâneo a milhões de faixas.',
    isFinish: false,
    tecnologias: ['React', 'Redux', 'Redux-Thunk', 'Styled-Components', 'React-Router-Dom', 'Vite', 'TypeScript'] },

  { image: recipesApp,
    title: 'Recipes App',
    url: 'https://app-de-receitas-umber.vercel.app/',
    describe: '',
    isFinish: true,
    tecnologias: ['React', 'Redux', 'Redux-thunk', 'Tailwind', 'React-Router-Dom', 'Vite', 'TypeScript'] },

  { image: recipesApp,
    title: 'color guess',
    url: 'https://color-guess-xi.vercel.app',
    describe: '',
    isFinish: true,
    tecnologias: ['HTML', 'JavaScript', 'CSS'] },

  { image: recipesApp,
    title: 'Pixels Art',
    url: 'https://pixels-art-orcin.vercel.app',
    describe: '',
    isFinish: true,
    tecnologias: ['HTML', 'JavaScript', 'CSS', 'LocalStorage'] },

  { image: recipesApp,
    title: 'RuyTTer 2.0',
    url: 'https://ruytt.vercel.app',
    describe: '',
    isFinish: false,
    tecnologias: ['React', 'Firebase', 'Tailwind', 'Redux', 'React-Router-Dom'] },

  { image: recipesApp,
    title: 'Chinelinho',
    url: 'https://chinelinho.vercel.app/',
    describe: '',
    isFinish: false,
    tecnologias: ['HTML', 'CSS', 'JavaScript'] },

  { image: recipesApp,
    title: 'Ghibli Animations',
    url: 'https://ghibli-animations-nine.vercel.app/',
    describe: '',
    isFinish: true,
    tecnologias: ['React', 'Context Api', 'Styled-Components', 'React-Router_Dom'] },

  { image: recipesApp,
    title: 'Breja',
    url: 'https://breja-two.vercel.app/',
    describe: '',
    isFinish: true,
    tecnologias: ['HTML', 'CSS', 'JavaScript'] },

  { image: recipesApp,
    title: 'Teste de Gravidade',
    url: 'https://gravidade-vercel.vercel.app/',
    describe: '',
    isFinish: true,
    tecnologias: ['HTML', 'CSS', 'JavaScript'] },

  { image: dede,
    title: 'Apolo Clicker',
    url: 'https://apolo-clicker.vercel.app/',
    describe: '',
    isFinish: true,
    tecnologias: ['React', 'Redux', 'Styled-Components', 'LocalStorage'] },
];
