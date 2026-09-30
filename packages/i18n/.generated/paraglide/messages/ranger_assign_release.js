/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Assign_ReleaseInputs */

const en_ranger_assign_release = /** @type {(inputs: Ranger_Assign_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Release`)
};

const es_ranger_assign_release = /** @type {(inputs: Ranger_Assign_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liberar`)
};

const de_ranger_assign_release = /** @type {(inputs: Ranger_Assign_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Freigeben`)
};

const fr_ranger_assign_release = /** @type {(inputs: Ranger_Assign_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Libérer`)
};

const it_ranger_assign_release = /** @type {(inputs: Ranger_Assign_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rilascia`)
};

const nl_ranger_assign_release = /** @type {(inputs: Ranger_Assign_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vrijgeven`)
};

const pl_ranger_assign_release = /** @type {(inputs: Ranger_Assign_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zwolnij`)
};

const pt_ranger_assign_release = /** @type {(inputs: Ranger_Assign_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liberar`)
};

const ru_ranger_assign_release = /** @type {(inputs: Ranger_Assign_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Освободить`)
};

const sv_ranger_assign_release = /** @type {(inputs: Ranger_Assign_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Släpp`)
};

const tr_ranger_assign_release = /** @type {(inputs: Ranger_Assign_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bırak`)
};

const zh_ranger_assign_release = /** @type {(inputs: Ranger_Assign_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`释放`)
};

const ja_ranger_assign_release = /** @type {(inputs: Ranger_Assign_ReleaseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`割り当て解除`)
};

/**
* | output |
* | --- |
* | "Release" |
*
* @param {Ranger_Assign_ReleaseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_assign_release = /** @type {((inputs?: Ranger_Assign_ReleaseInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Assign_ReleaseInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_assign_release(inputs)
	if (locale === "de") return de_ranger_assign_release(inputs)
	if (locale === "fr") return fr_ranger_assign_release(inputs)
	if (locale === "it") return it_ranger_assign_release(inputs)
	if (locale === "nl") return nl_ranger_assign_release(inputs)
	if (locale === "pl") return pl_ranger_assign_release(inputs)
	if (locale === "pt") return pt_ranger_assign_release(inputs)
	if (locale === "ru") return ru_ranger_assign_release(inputs)
	if (locale === "sv") return sv_ranger_assign_release(inputs)
	if (locale === "tr") return tr_ranger_assign_release(inputs)
	if (locale === "zh") return zh_ranger_assign_release(inputs)
	if (locale === "ja") return ja_ranger_assign_release(inputs)
	return en_ranger_assign_release(inputs)
});
