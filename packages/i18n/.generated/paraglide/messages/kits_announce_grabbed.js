/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, position: NonNullable<unknown>, total: NonNullable<unknown> }} Kits_Announce_GrabbedInputs */

const en_kits_announce_grabbed = /** @type {(inputs: Kits_Announce_GrabbedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} picked up. Position ${i?.position} of ${i?.total}.`)
};

const es_kits_announce_grabbed = /** @type {(inputs: Kits_Announce_GrabbedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} seleccionado. Posición ${i?.position} de ${i?.total}.`)
};

const de_kits_announce_grabbed = /** @type {(inputs: Kits_Announce_GrabbedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} aufgenommen. Position ${i?.position} von ${i?.total}.`)
};

const fr_kits_announce_grabbed = /** @type {(inputs: Kits_Announce_GrabbedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} saisi. Position ${i?.position} sur ${i?.total}.`)
};

const it_kits_announce_grabbed = /** @type {(inputs: Kits_Announce_GrabbedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} presa. Posizione ${i?.position} di ${i?.total}.`)
};

const nl_kits_announce_grabbed = /** @type {(inputs: Kits_Announce_GrabbedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} opgepakt. Positie ${i?.position} van ${i?.total}.`)
};

const pl_kits_announce_grabbed = /** @type {(inputs: Kits_Announce_GrabbedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Podniesiono ${i?.name}. Pozycja ${i?.position} z ${i?.total}.`)
};

const pt_kits_announce_grabbed = /** @type {(inputs: Kits_Announce_GrabbedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} selecionado. Posição ${i?.position} de ${i?.total}.`)
};

const ru_kits_announce_grabbed = /** @type {(inputs: Kits_Announce_GrabbedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} захвачен. Позиция ${i?.position} из ${i?.total}.`)
};

const sv_kits_announce_grabbed = /** @type {(inputs: Kits_Announce_GrabbedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} upplyft. Plats ${i?.position} av ${i?.total}.`)
};

const tr_kits_announce_grabbed = /** @type {(inputs: Kits_Announce_GrabbedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} tutuldu. Sıra ${i?.position}/${i?.total}.`)
};

const zh_kits_announce_grabbed = /** @type {(inputs: Kits_Announce_GrabbedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已拿起 ${i?.name}，当前第 ${i?.position}/${i?.total} 位。`)
};

const ja_kits_announce_grabbed = /** @type {(inputs: Kits_Announce_GrabbedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} をつかみました。${i?.total} 件中 ${i?.position} 番目です。`)
};

/**
* | output |
* | --- |
* | "{name} picked up. Position {position} of {total}." |
*
* @param {Kits_Announce_GrabbedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_announce_grabbed = /** @type {((inputs: Kits_Announce_GrabbedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Announce_GrabbedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_announce_grabbed(inputs)
	if (locale === "de") return de_kits_announce_grabbed(inputs)
	if (locale === "fr") return fr_kits_announce_grabbed(inputs)
	if (locale === "it") return it_kits_announce_grabbed(inputs)
	if (locale === "nl") return nl_kits_announce_grabbed(inputs)
	if (locale === "pl") return pl_kits_announce_grabbed(inputs)
	if (locale === "pt") return pt_kits_announce_grabbed(inputs)
	if (locale === "ru") return ru_kits_announce_grabbed(inputs)
	if (locale === "sv") return sv_kits_announce_grabbed(inputs)
	if (locale === "tr") return tr_kits_announce_grabbed(inputs)
	if (locale === "zh") return zh_kits_announce_grabbed(inputs)
	if (locale === "ja") return ja_kits_announce_grabbed(inputs)
	return en_kits_announce_grabbed(inputs)
});
