/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Hub_IntroInputs */

const en_jams_hub_intro = /** @type {(inputs: Jams_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build a mod in a few days, then vote for the best ones. Every jam has a theme, a deadline and four voting categories.`)
};

const es_jams_hub_intro = /** @type {(inputs: Jams_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea un mod en pocos días y vota por los mejores. Cada jam tiene un tema, una fecha límite y cuatro categorías de votación.`)
};

const de_jams_hub_intro = /** @type {(inputs: Jams_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baue in wenigen Tagen einen Mod und stimme danach für die besten ab. Jede Jam hat ein Thema, eine Frist und vier Wertungskategorien.`)
};

const fr_jams_hub_intro = /** @type {(inputs: Jams_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créez un mod en quelques jours, puis votez pour les meilleurs. Chaque jam a un thème, une date limite et quatre catégories de vote.`)
};

const it_jams_hub_intro = /** @type {(inputs: Jams_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea una mod in pochi giorni, poi vota le migliori. Ogni jam ha un tema, una scadenza e quattro categorie di voto.`)
};

const nl_jams_hub_intro = /** @type {(inputs: Jams_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maak in een paar dagen een mod en stem daarna op de beste. Elke jam heeft een thema, een deadline en vier stemcategorieën.`)
};

const pl_jams_hub_intro = /** @type {(inputs: Jams_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stwórz mod w kilka dni, a potem zagłosuj na najlepsze. Każdy jam ma temat, termin i cztery kategorie głosowania.`)
};

const pt_jams_hub_intro = /** @type {(inputs: Jams_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crie um mod em poucos dias e depois vote nos melhores. Cada jam tem um tema, um prazo e quatro categorias de votação.`)
};

const ru_jams_hub_intro = /** @type {(inputs: Jams_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сделайте мод за несколько дней, затем голосуйте за лучшие. У каждого джема есть тема, дедлайн и четыре категории голосования.`)
};

const sv_jams_hub_intro = /** @type {(inputs: Jams_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bygg en modd på några dagar och rösta sedan på de bästa. Varje jam har ett tema, en deadline och fyra röstningskategorier.`)
};

const tr_jams_hub_intro = /** @type {(inputs: Jams_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Birkaç günde bir mod yap, sonra en iyilere oy ver. Her jam'in bir teması, bir son tarihi ve dört oylama kategorisi vardır.`)
};

const zh_jams_hub_intro = /** @type {(inputs: Jams_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`几天内做出一个模组，然后为最好的作品投票。每场 Jam 都有主题、截止日期和四个投票类别。`)
};

const ja_jams_hub_intro = /** @type {(inputs: Jams_Hub_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`数日で MOD を作り、そのあとで気に入った作品に投票します。各ジャムにはテーマ、締め切り、4つの投票カテゴリがあります。`)
};

/**
* | output |
* | --- |
* | "Build a mod in a few days, then vote for the best ones. Every jam has a theme, a deadline and four voting categories." |
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
