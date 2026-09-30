/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ title: NonNullable<unknown> }} Ranger_Decided_RestoreInputs */

const en_ranger_decided_restore = /** @type {(inputs: Ranger_Decided_RestoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Restored: ${i?.title}`)
};

const es_ranger_decided_restore = /** @type {(inputs: Ranger_Decided_RestoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Restaurado: ${i?.title}`)
};

const de_ranger_decided_restore = /** @type {(inputs: Ranger_Decided_RestoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wiederhergestellt: ${i?.title}`)
};

const fr_ranger_decided_restore = /** @type {(inputs: Ranger_Decided_RestoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Restauré : ${i?.title}`)
};

const it_ranger_decided_restore = /** @type {(inputs: Ranger_Decided_RestoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ripristinato: ${i?.title}`)
};

const nl_ranger_decided_restore = /** @type {(inputs: Ranger_Decided_RestoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hersteld: ${i?.title}`)
};

const pl_ranger_decided_restore = /** @type {(inputs: Ranger_Decided_RestoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Przywrócono: ${i?.title}`)
};

const pt_ranger_decided_restore = /** @type {(inputs: Ranger_Decided_RestoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Restaurado: ${i?.title}`)
};

const ru_ranger_decided_restore = /** @type {(inputs: Ranger_Decided_RestoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Восстановлено: ${i?.title}`)
};

const sv_ranger_decided_restore = /** @type {(inputs: Ranger_Decided_RestoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Återställd: ${i?.title}`)
};

const tr_ranger_decided_restore = /** @type {(inputs: Ranger_Decided_RestoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Geri yüklendi: ${i?.title}`)
};

const zh_ranger_decided_restore = /** @type {(inputs: Ranger_Decided_RestoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已恢复：${i?.title}`)
};

const ja_ranger_decided_restore = /** @type {(inputs: Ranger_Decided_RestoreInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`復元しました：${i?.title}`)
};

/**
* | output |
* | --- |
* | "Restored: {title}" |
*
* @param {Ranger_Decided_RestoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_decided_restore = /** @type {((inputs: Ranger_Decided_RestoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Decided_RestoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_decided_restore(inputs)
	if (locale === "de") return de_ranger_decided_restore(inputs)
	if (locale === "fr") return fr_ranger_decided_restore(inputs)
	if (locale === "it") return it_ranger_decided_restore(inputs)
	if (locale === "nl") return nl_ranger_decided_restore(inputs)
	if (locale === "pl") return pl_ranger_decided_restore(inputs)
	if (locale === "pt") return pt_ranger_decided_restore(inputs)
	if (locale === "ru") return ru_ranger_decided_restore(inputs)
	if (locale === "sv") return sv_ranger_decided_restore(inputs)
	if (locale === "tr") return tr_ranger_decided_restore(inputs)
	if (locale === "zh") return zh_ranger_decided_restore(inputs)
	if (locale === "ja") return ja_ranger_decided_restore(inputs)
	return en_ranger_decided_restore(inputs)
});
