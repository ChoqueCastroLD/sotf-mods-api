/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Start_TitleInputs */

const en_landing_start_title = /** @type {(inputs: Landing_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start here`)
};

const es_landing_start_title = /** @type {(inputs: Landing_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Empieza aquí`)
};

const de_landing_start_title = /** @type {(inputs: Landing_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hier starten`)
};

const fr_landing_start_title = /** @type {(inputs: Landing_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commencer ici`)
};

const it_landing_start_title = /** @type {(inputs: Landing_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inizia da qui`)
};

const nl_landing_start_title = /** @type {(inputs: Landing_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Begin hier`)
};

const pl_landing_start_title = /** @type {(inputs: Landing_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zacznij tutaj`)
};

const pt_landing_start_title = /** @type {(inputs: Landing_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comece aqui`)
};

const ru_landing_start_title = /** @type {(inputs: Landing_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`С чего начать`)
};

const sv_landing_start_title = /** @type {(inputs: Landing_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Börja här`)
};

const tr_landing_start_title = /** @type {(inputs: Landing_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buradan başla`)
};

const zh_landing_start_title = /** @type {(inputs: Landing_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`从这里开始`)
};

const ja_landing_start_title = /** @type {(inputs: Landing_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ここから始めよう`)
};

/**
* | output |
* | --- |
* | "Start here" |
*
* @param {Landing_Start_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_start_title = /** @type {((inputs?: Landing_Start_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Start_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_start_title(inputs)
	if (locale === "de") return de_landing_start_title(inputs)
	if (locale === "fr") return fr_landing_start_title(inputs)
	if (locale === "it") return it_landing_start_title(inputs)
	if (locale === "nl") return nl_landing_start_title(inputs)
	if (locale === "pl") return pl_landing_start_title(inputs)
	if (locale === "pt") return pt_landing_start_title(inputs)
	if (locale === "ru") return ru_landing_start_title(inputs)
	if (locale === "sv") return sv_landing_start_title(inputs)
	if (locale === "tr") return tr_landing_start_title(inputs)
	if (locale === "zh") return zh_landing_start_title(inputs)
	if (locale === "ja") return ja_landing_start_title(inputs)
	return en_landing_start_title(inputs)
});
