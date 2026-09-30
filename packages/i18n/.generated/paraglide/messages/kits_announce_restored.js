/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Kits_Announce_RestoredInputs */

const en_kits_announce_restored = /** @type {(inputs: Kits_Announce_RestoredInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} restored.`)
};

const es_kits_announce_restored = /** @type {(inputs: Kits_Announce_RestoredInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} restaurado.`)
};

const de_kits_announce_restored = /** @type {(inputs: Kits_Announce_RestoredInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} wiederhergestellt.`)
};

const fr_kits_announce_restored = /** @type {(inputs: Kits_Announce_RestoredInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} rétabli.`)
};

const it_kits_announce_restored = /** @type {(inputs: Kits_Announce_RestoredInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ripristinata.`)
};

const nl_kits_announce_restored = /** @type {(inputs: Kits_Announce_RestoredInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} teruggezet.`)
};

const pl_kits_announce_restored = /** @type {(inputs: Kits_Announce_RestoredInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Przywrócono ${i?.name}.`)
};

const pt_kits_announce_restored = /** @type {(inputs: Kits_Announce_RestoredInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} restaurado.`)
};

const ru_kits_announce_restored = /** @type {(inputs: Kits_Announce_RestoredInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} восстановлен.`)
};

const sv_kits_announce_restored = /** @type {(inputs: Kits_Announce_RestoredInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} återställd.`)
};

const tr_kits_announce_restored = /** @type {(inputs: Kits_Announce_RestoredInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} geri getirildi.`)
};

const zh_kits_announce_restored = /** @type {(inputs: Kits_Announce_RestoredInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已恢复 ${i?.name}。`)
};

const ja_kits_announce_restored = /** @type {(inputs: Kits_Announce_RestoredInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を元に戻しました。`)
};

/**
* | output |
* | --- |
* | "{name} restored." |
*
* @param {Kits_Announce_RestoredInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_announce_restored = /** @type {((inputs: Kits_Announce_RestoredInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Announce_RestoredInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_announce_restored(inputs)
	if (locale === "de") return de_kits_announce_restored(inputs)
	if (locale === "fr") return fr_kits_announce_restored(inputs)
	if (locale === "it") return it_kits_announce_restored(inputs)
	if (locale === "nl") return nl_kits_announce_restored(inputs)
	if (locale === "pl") return pl_kits_announce_restored(inputs)
	if (locale === "pt") return pt_kits_announce_restored(inputs)
	if (locale === "ru") return ru_kits_announce_restored(inputs)
	if (locale === "sv") return sv_kits_announce_restored(inputs)
	if (locale === "tr") return tr_kits_announce_restored(inputs)
	if (locale === "zh") return zh_kits_announce_restored(inputs)
	if (locale === "ja") return ja_kits_announce_restored(inputs)
	return en_kits_announce_restored(inputs)
});
