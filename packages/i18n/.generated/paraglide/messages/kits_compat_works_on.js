/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ works: NonNullable<unknown>, total: NonNullable<unknown>, build: NonNullable<unknown> }} Kits_Compat_Works_OnInputs */

const en_kits_compat_works_on = /** @type {(inputs: Kits_Compat_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.works}/${i?.total} work on ${i?.build}`)
};

const es_kits_compat_works_on = /** @type {(inputs: Kits_Compat_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.works}/${i?.total} funcionan en ${i?.build}`)
};

const de_kits_compat_works_on = /** @type {(inputs: Kits_Compat_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.works}/${i?.total} laufen mit ${i?.build}`)
};

const fr_kits_compat_works_on = /** @type {(inputs: Kits_Compat_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.works}/${i?.total} fonctionnent sur ${i?.build}`)
};

const it_kits_compat_works_on = /** @type {(inputs: Kits_Compat_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.works}/${i?.total} funzionano con ${i?.build}`)
};

const nl_kits_compat_works_on = /** @type {(inputs: Kits_Compat_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.works}/${i?.total} werken op ${i?.build}`)
};

const pl_kits_compat_works_on = /** @type {(inputs: Kits_Compat_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.works}/${i?.total} działa na ${i?.build}`)
};

const pt_kits_compat_works_on = /** @type {(inputs: Kits_Compat_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.works}/${i?.total} funcionam no ${i?.build}`)
};

const ru_kits_compat_works_on = /** @type {(inputs: Kits_Compat_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.works}/${i?.total} работают на ${i?.build}`)
};

const sv_kits_compat_works_on = /** @type {(inputs: Kits_Compat_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.works}/${i?.total} fungerar på ${i?.build}`)
};

const tr_kits_compat_works_on = /** @type {(inputs: Kits_Compat_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.works}/${i?.total} tanesi ${i?.build} ile çalışıyor`)
};

const zh_kits_compat_works_on = /** @type {(inputs: Kits_Compat_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.works}/${i?.total} 个适用于 ${i?.build}`)
};

const ja_kits_compat_works_on = /** @type {(inputs: Kits_Compat_Works_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.works}/${i?.total} 件が ${i?.build} で動作`)
};

/**
* | output |
* | --- |
* | "{works}/{total} work on {build}" |
*
* @param {Kits_Compat_Works_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_compat_works_on = /** @type {((inputs: Kits_Compat_Works_OnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Compat_Works_OnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_compat_works_on(inputs)
	if (locale === "de") return de_kits_compat_works_on(inputs)
	if (locale === "fr") return fr_kits_compat_works_on(inputs)
	if (locale === "it") return it_kits_compat_works_on(inputs)
	if (locale === "nl") return nl_kits_compat_works_on(inputs)
	if (locale === "pl") return pl_kits_compat_works_on(inputs)
	if (locale === "pt") return pt_kits_compat_works_on(inputs)
	if (locale === "ru") return ru_kits_compat_works_on(inputs)
	if (locale === "sv") return sv_kits_compat_works_on(inputs)
	if (locale === "tr") return tr_kits_compat_works_on(inputs)
	if (locale === "zh") return zh_kits_compat_works_on(inputs)
	if (locale === "ja") return ja_kits_compat_works_on(inputs)
	return en_kits_compat_works_on(inputs)
});
