/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Sanction_EndedInputs */

const en_ranger_sanction_ended = /** @type {(inputs: Ranger_Sanction_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ended`)
};

const es_ranger_sanction_ended = /** @type {(inputs: Ranger_Sanction_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terminada`)
};

const de_ranger_sanction_ended = /** @type {(inputs: Ranger_Sanction_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beendet`)
};

const fr_ranger_sanction_ended = /** @type {(inputs: Ranger_Sanction_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terminée`)
};

const it_ranger_sanction_ended = /** @type {(inputs: Ranger_Sanction_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terminata`)
};

const nl_ranger_sanction_ended = /** @type {(inputs: Ranger_Sanction_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afgelopen`)
};

const pl_ranger_sanction_ended = /** @type {(inputs: Ranger_Sanction_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zakończona`)
};

const pt_ranger_sanction_ended = /** @type {(inputs: Ranger_Sanction_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Encerrada`)
};

const ru_ranger_sanction_ended = /** @type {(inputs: Ranger_Sanction_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Завершена`)
};

const sv_ranger_sanction_ended = /** @type {(inputs: Ranger_Sanction_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avslutad`)
};

const tr_ranger_sanction_ended = /** @type {(inputs: Ranger_Sanction_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sona erdi`)
};

const zh_ranger_sanction_ended = /** @type {(inputs: Ranger_Sanction_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已结束`)
};

const ja_ranger_sanction_ended = /** @type {(inputs: Ranger_Sanction_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`終了`)
};

/**
* | output |
* | --- |
* | "Ended" |
*
* @param {Ranger_Sanction_EndedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sanction_ended = /** @type {((inputs?: Ranger_Sanction_EndedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_EndedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sanction_ended(inputs)
	if (locale === "de") return de_ranger_sanction_ended(inputs)
	if (locale === "fr") return fr_ranger_sanction_ended(inputs)
	if (locale === "it") return it_ranger_sanction_ended(inputs)
	if (locale === "nl") return nl_ranger_sanction_ended(inputs)
	if (locale === "pl") return pl_ranger_sanction_ended(inputs)
	if (locale === "pt") return pt_ranger_sanction_ended(inputs)
	if (locale === "ru") return ru_ranger_sanction_ended(inputs)
	if (locale === "sv") return sv_ranger_sanction_ended(inputs)
	if (locale === "tr") return tr_ranger_sanction_ended(inputs)
	if (locale === "zh") return zh_ranger_sanction_ended(inputs)
	if (locale === "ja") return ja_ranger_sanction_ended(inputs)
	return en_ranger_sanction_ended(inputs)
});
