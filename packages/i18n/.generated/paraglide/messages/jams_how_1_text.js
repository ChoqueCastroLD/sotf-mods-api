/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_How_1_TextInputs */

const en_jams_how_1_text = /** @type {(inputs: Jams_How_1_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Every jam has a name, a schedule and a theme, sometimes sealed until the first day.`)
};

const es_jams_how_1_text = /** @type {(inputs: Jams_How_1_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cada jam tiene un nombre, un calendario y un tema, a veces sellado hasta el primer día.`)
};

const de_jams_how_1_text = /** @type {(inputs: Jams_How_1_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeder Jam hat einen Namen, einen Zeitplan und ein Thema, manchmal bis zum ersten Tag versiegelt.`)
};

const fr_jams_how_1_text = /** @type {(inputs: Jams_How_1_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chaque jam a un nom, un calendrier et un thème, parfois scellé jusqu'au premier jour.`)
};

const it_jams_how_1_text = /** @type {(inputs: Jams_How_1_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ogni jam ha un nome, un calendario e un tema, a volte sigillato fino al primo giorno.`)
};

const nl_jams_how_1_text = /** @type {(inputs: Jams_How_1_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elke jam heeft een naam, een planning en een thema, soms verzegeld tot de eerste dag.`)
};

const pl_jams_how_1_text = /** @type {(inputs: Jams_How_1_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Każdy jam ma nazwę, harmonogram i temat, czasem zapieczętowany do pierwszego dnia.`)
};

const pt_jams_how_1_text = /** @type {(inputs: Jams_How_1_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todo jam tem um nome, um cronograma e um tema, às vezes lacrado até o primeiro dia.`)
};

const ru_jams_how_1_text = /** @type {(inputs: Jams_How_1_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`У каждого джема есть название, расписание и тема, иногда скрытая до первого дня.`)
};

const sv_jams_how_1_text = /** @type {(inputs: Jams_How_1_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varje jam har ett namn, ett schema och ett tema, ibland förseglat till första dagen.`)
};

const tr_jams_how_1_text = /** @type {(inputs: Jams_How_1_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her jam'in bir adı, bir takvimi ve bazen ilk güne kadar mühürlü kalan bir teması vardır.`)
};

const zh_jams_how_1_text = /** @type {(inputs: Jams_How_1_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每场 Jam 都有名称、日程和主题，主题有时会保密到第一天。`)
};

const ja_jams_how_1_text = /** @type {(inputs: Jams_How_1_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジャムには名前と日程とテーマがあり、テーマは初日まで非公開のこともあります。`)
};

/**
* | output |
* | --- |
* | "Every jam has a name, a schedule and a theme, sometimes sealed until the first day." |
*
* @param {Jams_How_1_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_how_1_text = /** @type {((inputs?: Jams_How_1_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_How_1_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_how_1_text(inputs)
	if (locale === "de") return de_jams_how_1_text(inputs)
	if (locale === "fr") return fr_jams_how_1_text(inputs)
	if (locale === "it") return it_jams_how_1_text(inputs)
	if (locale === "nl") return nl_jams_how_1_text(inputs)
	if (locale === "pl") return pl_jams_how_1_text(inputs)
	if (locale === "pt") return pt_jams_how_1_text(inputs)
	if (locale === "ru") return ru_jams_how_1_text(inputs)
	if (locale === "sv") return sv_jams_how_1_text(inputs)
	if (locale === "tr") return tr_jams_how_1_text(inputs)
	if (locale === "zh") return zh_jams_how_1_text(inputs)
	if (locale === "ja") return ja_jams_how_1_text(inputs)
	return en_jams_how_1_text(inputs)
});
