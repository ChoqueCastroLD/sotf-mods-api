/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Not_Found_HomeInputs */

const en_errors_not_found_home = /** @type {(inputs: Errors_Not_Found_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to the trail`)
};

const es_errors_not_found_home = /** @type {(inputs: Errors_Not_Found_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volver al sendero`)
};

const de_errors_not_found_home = /** @type {(inputs: Errors_Not_Found_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurück zum Weg`)
};

const fr_errors_not_found_home = /** @type {(inputs: Errors_Not_Found_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retour au sentier`)
};

const it_errors_not_found_home = /** @type {(inputs: Errors_Not_Found_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Torna al sentiero`)
};

const nl_errors_not_found_home = /** @type {(inputs: Errors_Not_Found_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terug naar het pad`)
};

const pl_errors_not_found_home = /** @type {(inputs: Errors_Not_Found_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wróć na szlak`)
};

const pt_errors_not_found_home = /** @type {(inputs: Errors_Not_Found_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voltar para a trilha`)
};

const ru_errors_not_found_home = /** @type {(inputs: Errors_Not_Found_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вернуться на тропу`)
};

const sv_errors_not_found_home = /** @type {(inputs: Errors_Not_Found_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillbaka till stigen`)
};

const tr_errors_not_found_home = /** @type {(inputs: Errors_Not_Found_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patikaya dön`)
};

const zh_errors_not_found_home = /** @type {(inputs: Errors_Not_Found_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`回到小路`)
};

const ja_errors_not_found_home = /** @type {(inputs: Errors_Not_Found_HomeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`道に戻る`)
};

/**
* | output |
* | --- |
* | "Back to the trail" |
*
* @param {Errors_Not_Found_HomeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_not_found_home = /** @type {((inputs?: Errors_Not_Found_HomeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Not_Found_HomeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_not_found_home(inputs)
	if (locale === "de") return de_errors_not_found_home(inputs)
	if (locale === "fr") return fr_errors_not_found_home(inputs)
	if (locale === "it") return it_errors_not_found_home(inputs)
	if (locale === "nl") return nl_errors_not_found_home(inputs)
	if (locale === "pl") return pl_errors_not_found_home(inputs)
	if (locale === "pt") return pt_errors_not_found_home(inputs)
	if (locale === "ru") return ru_errors_not_found_home(inputs)
	if (locale === "sv") return sv_errors_not_found_home(inputs)
	if (locale === "tr") return tr_errors_not_found_home(inputs)
	if (locale === "zh") return zh_errors_not_found_home(inputs)
	if (locale === "ja") return ja_errors_not_found_home(inputs)
	return en_errors_not_found_home(inputs)
});
