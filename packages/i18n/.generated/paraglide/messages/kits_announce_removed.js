/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Kits_Announce_RemovedInputs */

const en_kits_announce_removed = /** @type {(inputs: Kits_Announce_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} removed.`)
};

const es_kits_announce_removed = /** @type {(inputs: Kits_Announce_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} quitado.`)
};

const de_kits_announce_removed = /** @type {(inputs: Kits_Announce_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} entfernt.`)
};

const fr_kits_announce_removed = /** @type {(inputs: Kits_Announce_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} retiré.`)
};

const it_kits_announce_removed = /** @type {(inputs: Kits_Announce_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} rimossa.`)
};

const nl_kits_announce_removed = /** @type {(inputs: Kits_Announce_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} verwijderd.`)
};

const pl_kits_announce_removed = /** @type {(inputs: Kits_Announce_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Usunięto ${i?.name}.`)
};

const pt_kits_announce_removed = /** @type {(inputs: Kits_Announce_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} removido.`)
};

const ru_kits_announce_removed = /** @type {(inputs: Kits_Announce_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} удалён.`)
};

const sv_kits_announce_removed = /** @type {(inputs: Kits_Announce_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} borttagen.`)
};

const tr_kits_announce_removed = /** @type {(inputs: Kits_Announce_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} kaldırıldı.`)
};

const zh_kits_announce_removed = /** @type {(inputs: Kits_Announce_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已移除 ${i?.name}。`)
};

const ja_kits_announce_removed = /** @type {(inputs: Kits_Announce_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を削除しました。`)
};

/**
* | output |
* | --- |
* | "{name} removed." |
*
* @param {Kits_Announce_RemovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_announce_removed = /** @type {((inputs: Kits_Announce_RemovedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Announce_RemovedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_announce_removed(inputs)
	if (locale === "de") return de_kits_announce_removed(inputs)
	if (locale === "fr") return fr_kits_announce_removed(inputs)
	if (locale === "it") return it_kits_announce_removed(inputs)
	if (locale === "nl") return nl_kits_announce_removed(inputs)
	if (locale === "pl") return pl_kits_announce_removed(inputs)
	if (locale === "pt") return pt_kits_announce_removed(inputs)
	if (locale === "ru") return ru_kits_announce_removed(inputs)
	if (locale === "sv") return sv_kits_announce_removed(inputs)
	if (locale === "tr") return tr_kits_announce_removed(inputs)
	if (locale === "zh") return zh_kits_announce_removed(inputs)
	if (locale === "ja") return ja_kits_announce_removed(inputs)
	return en_kits_announce_removed(inputs)
});
