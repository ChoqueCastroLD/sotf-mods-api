/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, position: NonNullable<unknown>, total: NonNullable<unknown> }} Kits_Announce_DroppedInputs */

const en_kits_announce_dropped = /** @type {(inputs: Kits_Announce_DroppedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} dropped at position ${i?.position} of ${i?.total}.`)
};

const es_kits_announce_dropped = /** @type {(inputs: Kits_Announce_DroppedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} colocado en la posición ${i?.position} de ${i?.total}.`)
};

const de_kits_announce_dropped = /** @type {(inputs: Kits_Announce_DroppedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} auf Position ${i?.position} von ${i?.total} abgelegt.`)
};

const fr_kits_announce_dropped = /** @type {(inputs: Kits_Announce_DroppedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} déposé en position ${i?.position} sur ${i?.total}.`)
};

const it_kits_announce_dropped = /** @type {(inputs: Kits_Announce_DroppedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} rilasciata in posizione ${i?.position} di ${i?.total}.`)
};

const nl_kits_announce_dropped = /** @type {(inputs: Kits_Announce_DroppedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} neergezet op positie ${i?.position} van ${i?.total}.`)
};

const pl_kits_announce_dropped = /** @type {(inputs: Kits_Announce_DroppedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Upuszczono ${i?.name} na pozycji ${i?.position} z ${i?.total}.`)
};

const pt_kits_announce_dropped = /** @type {(inputs: Kits_Announce_DroppedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} solto na posição ${i?.position} de ${i?.total}.`)
};

const ru_kits_announce_dropped = /** @type {(inputs: Kits_Announce_DroppedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} отпущен на позиции ${i?.position} из ${i?.total}.`)
};

const sv_kits_announce_dropped = /** @type {(inputs: Kits_Announce_DroppedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} släppt på plats ${i?.position} av ${i?.total}.`)
};

const tr_kits_announce_dropped = /** @type {(inputs: Kits_Announce_DroppedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name}, ${i?.position}/${i?.total} sırasına bırakıldı.`)
};

const zh_kits_announce_dropped = /** @type {(inputs: Kits_Announce_DroppedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 已放在第 ${i?.position}/${i?.total} 位。`)
};

const ja_kits_announce_dropped = /** @type {(inputs: Kits_Announce_DroppedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を ${i?.total} 件中 ${i?.position} 番目に置きました。`)
};

/**
* | output |
* | --- |
* | "{name} dropped at position {position} of {total}." |
*
* @param {Kits_Announce_DroppedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_announce_dropped = /** @type {((inputs: Kits_Announce_DroppedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Announce_DroppedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_announce_dropped(inputs)
	if (locale === "de") return de_kits_announce_dropped(inputs)
	if (locale === "fr") return fr_kits_announce_dropped(inputs)
	if (locale === "it") return it_kits_announce_dropped(inputs)
	if (locale === "nl") return nl_kits_announce_dropped(inputs)
	if (locale === "pl") return pl_kits_announce_dropped(inputs)
	if (locale === "pt") return pt_kits_announce_dropped(inputs)
	if (locale === "ru") return ru_kits_announce_dropped(inputs)
	if (locale === "sv") return sv_kits_announce_dropped(inputs)
	if (locale === "tr") return tr_kits_announce_dropped(inputs)
	if (locale === "zh") return zh_kits_announce_dropped(inputs)
	if (locale === "ja") return ja_kits_announce_dropped(inputs)
	return en_kits_announce_dropped(inputs)
});
