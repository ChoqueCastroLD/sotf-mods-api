/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, position: NonNullable<unknown> }} Kits_Announce_AddedInputs */

const en_kits_announce_added = /** @type {(inputs: Kits_Announce_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} added at position ${i?.position}.`)
};

const es_kits_announce_added = /** @type {(inputs: Kits_Announce_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} añadido en la posición ${i?.position}.`)
};

const de_kits_announce_added = /** @type {(inputs: Kits_Announce_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} auf Position ${i?.position} hinzugefügt.`)
};

const fr_kits_announce_added = /** @type {(inputs: Kits_Announce_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ajouté en position ${i?.position}.`)
};

const it_kits_announce_added = /** @type {(inputs: Kits_Announce_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} aggiunta in posizione ${i?.position}.`)
};

const nl_kits_announce_added = /** @type {(inputs: Kits_Announce_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} toegevoegd op positie ${i?.position}.`)
};

const pl_kits_announce_added = /** @type {(inputs: Kits_Announce_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dodano ${i?.name} na pozycji ${i?.position}.`)
};

const pt_kits_announce_added = /** @type {(inputs: Kits_Announce_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} adicionado na posição ${i?.position}.`)
};

const ru_kits_announce_added = /** @type {(inputs: Kits_Announce_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} добавлен на позицию ${i?.position}.`)
};

const sv_kits_announce_added = /** @type {(inputs: Kits_Announce_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} tillagd på plats ${i?.position}.`)
};

const tr_kits_announce_added = /** @type {(inputs: Kits_Announce_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}, ${i?.position}. sıraya eklendi.`)
};

const zh_kits_announce_added = /** @type {(inputs: Kits_Announce_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已将 ${i?.name} 添加到第 ${i?.position} 位。`)
};

const ja_kits_announce_added = /** @type {(inputs: Kits_Announce_AddedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を ${i?.position} 番目に追加しました。`)
};

/**
* | output |
* | --- |
* | "{name} added at position {position}." |
*
* @param {Kits_Announce_AddedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_announce_added = /** @type {((inputs: Kits_Announce_AddedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Announce_AddedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_announce_added(inputs)
	if (locale === "de") return de_kits_announce_added(inputs)
	if (locale === "fr") return fr_kits_announce_added(inputs)
	if (locale === "it") return it_kits_announce_added(inputs)
	if (locale === "nl") return nl_kits_announce_added(inputs)
	if (locale === "pl") return pl_kits_announce_added(inputs)
	if (locale === "pt") return pt_kits_announce_added(inputs)
	if (locale === "ru") return ru_kits_announce_added(inputs)
	if (locale === "sv") return sv_kits_announce_added(inputs)
	if (locale === "tr") return tr_kits_announce_added(inputs)
	if (locale === "zh") return zh_kits_announce_added(inputs)
	if (locale === "ja") return ja_kits_announce_added(inputs)
	return en_kits_announce_added(inputs)
});
