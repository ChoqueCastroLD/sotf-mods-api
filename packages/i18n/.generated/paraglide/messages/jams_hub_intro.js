/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Hub_IntroInputs */

const en_jams_hub_intro = /** @type {(inputs: Jams_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build in days, vote in a week, earn badges. Every jam has a theme, a deadline and four voting categories.`)
};

const es_jams_hub_intro = /** @type {(inputs: Jams_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea en días, vota en una semana y gana insignias. Cada jam tiene un tema, una fecha límite y cuatro categorías de votación.`)
};

const de_jams_hub_intro = /** @type {(inputs: Jams_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In Tagen bauen, in einer Woche abstimmen, Abzeichen verdienen. Jede Jam hat ein Thema, eine Frist und vier Wertungskategorien.`)
};

const fr_jams_hub_intro = /** @type {(inputs: Jams_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créez en quelques jours, votez en une semaine, gagnez des badges. Chaque jam a un thème, une date limite et quatre catégories de vote.`)
};

const it_jams_hub_intro = /** @type {(inputs: Jams_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea in pochi giorni, vota in una settimana, guadagna badge. Ogni jam ha un tema, una scadenza e quattro categorie di voto.`)
};

const nl_jams_hub_intro = /** @type {(inputs: Jams_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bouw in dagen, stem binnen een week, verdien badges. Elke jam heeft een thema, een deadline en vier stemcategorieën.`)
};

const pl_jams_hub_intro = /** @type {(inputs: Jams_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twórz w kilka dni, głosuj w tydzień, zdobywaj odznaki. Każdy jam ma temat, termin i cztery kategorie głosowania.`)
};

const pt_jams_hub_intro = /** @type {(inputs: Jams_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crie em dias, vote em uma semana, ganhe emblemas. Cada jam tem um tema, um prazo e quatro categorias de votação.`)
};

const ru_jams_hub_intro = /** @type {(inputs: Jams_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Создавайте за дни, голосуйте за неделю, получайте значки. У каждого джема есть тема, дедлайн и четыре категории голосования.`)
};

const sv_jams_hub_intro = /** @type {(inputs: Jams_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bygg på några dagar, rösta på en vecka, tjäna märken. Varje jam har ett tema, en deadline och fyra röstningskategorier.`)
};

const tr_jams_hub_intro = /** @type {(inputs: Jams_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Günler içinde yap, bir hafta içinde oy ver, rozet kazan. Her jam'in bir teması, bir son tarihi ve dört oylama kategorisi vardır.`)
};

const zh_jams_hub_intro = /** @type {(inputs: Jams_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`几天内制作，一周内投票，赢取徽章。每场 Jam 都有主题、截止日期和四个投票类别。`)
};

const ja_jams_hub_intro = /** @type {(inputs: Jams_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`数日で作り、1週間で投票し、バッジを獲得。各ジャムにはテーマ、締め切り、4つの投票カテゴリがあります。`)
};

/**
* | output |
* | --- |
* | "Build in days, vote in a week, earn badges. Every jam has a theme, a deadline and four voting categories." |
*
* @param {Jams_Hub_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_hub_intro = /** @type {((inputs?: Jams_Hub_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Hub_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_hub_intro(inputs)
	if (locale === "de") return de_jams_hub_intro(inputs)
	if (locale === "fr") return fr_jams_hub_intro(inputs)
	if (locale === "it") return it_jams_hub_intro(inputs)
	if (locale === "nl") return nl_jams_hub_intro(inputs)
	if (locale === "pl") return pl_jams_hub_intro(inputs)
	if (locale === "pt") return pt_jams_hub_intro(inputs)
	if (locale === "ru") return ru_jams_hub_intro(inputs)
	if (locale === "sv") return sv_jams_hub_intro(inputs)
	if (locale === "tr") return tr_jams_hub_intro(inputs)
	if (locale === "zh") return zh_jams_hub_intro(inputs)
	if (locale === "ja") return ja_jams_hub_intro(inputs)
	return en_jams_hub_intro(inputs)
});
