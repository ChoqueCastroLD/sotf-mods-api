/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ works: NonNullable<unknown>, total: NonNullable<unknown> }} Kits_Compat_WorksInputs */

const en_kits_compat_works = /** @type {(inputs: Kits_Compat_WorksInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.works}/${i?.total} work on the current patch`)
};

const es_kits_compat_works = /** @type {(inputs: Kits_Compat_WorksInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.works}/${i?.total} funcionan en el parche actual`)
};

const de_kits_compat_works = /** @type {(inputs: Kits_Compat_WorksInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.works}/${i?.total} laufen mit dem aktuellen Patch`)
};

const fr_kits_compat_works = /** @type {(inputs: Kits_Compat_WorksInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.works}/${i?.total} fonctionnent sur le patch actuel`)
};

const it_kits_compat_works = /** @type {(inputs: Kits_Compat_WorksInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.works}/${i?.total} funzionano con la patch attuale`)
};

const nl_kits_compat_works = /** @type {(inputs: Kits_Compat_WorksInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.works}/${i?.total} werken op de huidige patch`)
};

const pl_kits_compat_works = /** @type {(inputs: Kits_Compat_WorksInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.works}/${i?.total} działa na obecnej łatce`)
};

const pt_kits_compat_works = /** @type {(inputs: Kits_Compat_WorksInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.works}/${i?.total} funcionam no patch atual`)
};

const ru_kits_compat_works = /** @type {(inputs: Kits_Compat_WorksInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.works}/${i?.total} работают на текущем патче`)
};

const sv_kits_compat_works = /** @type {(inputs: Kits_Compat_WorksInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.works}/${i?.total} fungerar på aktuell patch`)
};

const tr_kits_compat_works = /** @type {(inputs: Kits_Compat_WorksInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.works}/${i?.total} tanesi güncel yamada çalışıyor`)
};

const zh_kits_compat_works = /** @type {(inputs: Kits_Compat_WorksInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.works}/${i?.total} 个适用于当前版本`)
};

const ja_kits_compat_works = /** @type {(inputs: Kits_Compat_WorksInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.works}/${i?.total} 件が最新パッチで動作`)
};

/**
* | output |
* | --- |
* | "{works}/{total} work on the current patch" |
*
* @param {Kits_Compat_WorksInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_compat_works = /** @type {((inputs: Kits_Compat_WorksInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Compat_WorksInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_compat_works(inputs)
	if (locale === "de") return de_kits_compat_works(inputs)
	if (locale === "fr") return fr_kits_compat_works(inputs)
	if (locale === "it") return it_kits_compat_works(inputs)
	if (locale === "nl") return nl_kits_compat_works(inputs)
	if (locale === "pl") return pl_kits_compat_works(inputs)
	if (locale === "pt") return pt_kits_compat_works(inputs)
	if (locale === "ru") return ru_kits_compat_works(inputs)
	if (locale === "sv") return sv_kits_compat_works(inputs)
	if (locale === "tr") return tr_kits_compat_works(inputs)
	if (locale === "zh") return zh_kits_compat_works(inputs)
	if (locale === "ja") return ja_kits_compat_works(inputs)
	return en_kits_compat_works(inputs)
});
