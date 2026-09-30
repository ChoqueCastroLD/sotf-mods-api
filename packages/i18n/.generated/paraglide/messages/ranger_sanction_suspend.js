/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Sanction_SuspendInputs */

const en_ranger_sanction_suspend = /** @type {(inputs: Ranger_Sanction_SuspendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suspend`)
};

const es_ranger_sanction_suspend = /** @type {(inputs: Ranger_Sanction_SuspendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suspender`)
};

const de_ranger_sanction_suspend = /** @type {(inputs: Ranger_Sanction_SuspendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suspendieren`)
};

const fr_ranger_sanction_suspend = /** @type {(inputs: Ranger_Sanction_SuspendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suspendre`)
};

const it_ranger_sanction_suspend = /** @type {(inputs: Ranger_Sanction_SuspendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sospendi`)
};

const nl_ranger_sanction_suspend = /** @type {(inputs: Ranger_Sanction_SuspendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schorsen`)
};

const pl_ranger_sanction_suspend = /** @type {(inputs: Ranger_Sanction_SuspendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zawieś`)
};

const pt_ranger_sanction_suspend = /** @type {(inputs: Ranger_Sanction_SuspendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suspender`)
};

const ru_ranger_sanction_suspend = /** @type {(inputs: Ranger_Sanction_SuspendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Приостановить`)
};

const sv_ranger_sanction_suspend = /** @type {(inputs: Ranger_Sanction_SuspendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stäng av`)
};

const tr_ranger_sanction_suspend = /** @type {(inputs: Ranger_Sanction_SuspendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Askıya al`)
};

const zh_ranger_sanction_suspend = /** @type {(inputs: Ranger_Sanction_SuspendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`停用`)
};

const ja_ranger_sanction_suspend = /** @type {(inputs: Ranger_Sanction_SuspendInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一時停止`)
};

/**
* | output |
* | --- |
* | "Suspend" |
*
* @param {Ranger_Sanction_SuspendInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sanction_suspend = /** @type {((inputs?: Ranger_Sanction_SuspendInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_SuspendInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sanction_suspend(inputs)
	if (locale === "de") return de_ranger_sanction_suspend(inputs)
	if (locale === "fr") return fr_ranger_sanction_suspend(inputs)
	if (locale === "it") return it_ranger_sanction_suspend(inputs)
	if (locale === "nl") return nl_ranger_sanction_suspend(inputs)
	if (locale === "pl") return pl_ranger_sanction_suspend(inputs)
	if (locale === "pt") return pt_ranger_sanction_suspend(inputs)
	if (locale === "ru") return ru_ranger_sanction_suspend(inputs)
	if (locale === "sv") return sv_ranger_sanction_suspend(inputs)
	if (locale === "tr") return tr_ranger_sanction_suspend(inputs)
	if (locale === "zh") return zh_ranger_sanction_suspend(inputs)
	if (locale === "ja") return ja_ranger_sanction_suspend(inputs)
	return en_ranger_sanction_suspend(inputs)
});
