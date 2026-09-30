/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ kit: NonNullable<unknown>, handle: NonNullable<unknown> }} Kits_Forked_FromInputs */

const en_kits_forked_from = /** @type {(inputs: Kits_Forked_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Forked from ${i?.kit} by @${i?.handle}`)
};

const es_kits_forked_from = /** @type {(inputs: Kits_Forked_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Copia de ${i?.kit} de @${i?.handle}`)
};

const de_kits_forked_from = /** @type {(inputs: Kits_Forked_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Abgeleitet von ${i?.kit} von @${i?.handle}`)
};

const fr_kits_forked_from = /** @type {(inputs: Kits_Forked_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dérivé de ${i?.kit} par @${i?.handle}`)
};

const it_kits_forked_from = /** @type {(inputs: Kits_Forked_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Derivato da ${i?.kit} di @${i?.handle}`)
};

const nl_kits_forked_from = /** @type {(inputs: Kits_Forked_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Afgeleid van ${i?.kit} door @${i?.handle}`)
};

const pl_kits_forked_from = /** @type {(inputs: Kits_Forked_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kopia zestawu ${i?.kit} od @${i?.handle}`)
};

const pt_kits_forked_from = /** @type {(inputs: Kits_Forked_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cópia de ${i?.kit} de @${i?.handle}`)
};

const ru_kits_forked_from = /** @type {(inputs: Kits_Forked_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Копия набора ${i?.kit} от @${i?.handle}`)
};

const sv_kits_forked_from = /** @type {(inputs: Kits_Forked_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kopierat från ${i?.kit} av @${i?.handle}`)
};

const tr_kits_forked_from = /** @type {(inputs: Kits_Forked_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`@${i?.handle} kullanıcısının ${i?.kit} kitinden kopyalandı`)
};

const zh_kits_forked_from = /** @type {(inputs: Kits_Forked_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`复刻自 @${i?.handle} 的 ${i?.kit}`)
};

const ja_kits_forked_from = /** @type {(inputs: Kits_Forked_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`@${i?.handle} さんの ${i?.kit} から派生`)
};

/**
* | output |
* | --- |
* | "Forked from {kit} by @{handle}" |
*
* @param {Kits_Forked_FromInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_forked_from = /** @type {((inputs: Kits_Forked_FromInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Forked_FromInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_forked_from(inputs)
	if (locale === "de") return de_kits_forked_from(inputs)
	if (locale === "fr") return fr_kits_forked_from(inputs)
	if (locale === "it") return it_kits_forked_from(inputs)
	if (locale === "nl") return nl_kits_forked_from(inputs)
	if (locale === "pl") return pl_kits_forked_from(inputs)
	if (locale === "pt") return pt_kits_forked_from(inputs)
	if (locale === "ru") return ru_kits_forked_from(inputs)
	if (locale === "sv") return sv_kits_forked_from(inputs)
	if (locale === "tr") return tr_kits_forked_from(inputs)
	if (locale === "zh") return zh_kits_forked_from(inputs)
	if (locale === "ja") return ja_kits_forked_from(inputs)
	return en_kits_forked_from(inputs)
});
