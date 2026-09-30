/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, position: NonNullable<unknown> }} Kits_Announce_CancelledInputs */

const en_kits_announce_cancelled = /** @type {(inputs: Kits_Announce_CancelledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Move cancelled. ${i?.name} is back at position ${i?.position}.`)
};

const es_kits_announce_cancelled = /** @type {(inputs: Kits_Announce_CancelledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Movimiento cancelado. ${i?.name} vuelve a la posición ${i?.position}.`)
};

const de_kits_announce_cancelled = /** @type {(inputs: Kits_Announce_CancelledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verschieben abgebrochen. ${i?.name} ist wieder auf Position ${i?.position}.`)
};

const fr_kits_announce_cancelled = /** @type {(inputs: Kits_Announce_CancelledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Déplacement annulé. ${i?.name} revient en position ${i?.position}.`)
};

const it_kits_announce_cancelled = /** @type {(inputs: Kits_Announce_CancelledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Spostamento annullato. ${i?.name} torna in posizione ${i?.position}.`)
};

const nl_kits_announce_cancelled = /** @type {(inputs: Kits_Announce_CancelledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verplaatsen geannuleerd. ${i?.name} staat weer op positie ${i?.position}.`)
};

const pl_kits_announce_cancelled = /** @type {(inputs: Kits_Announce_CancelledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Anulowano przesuwanie. ${i?.name} wraca na pozycję ${i?.position}.`)
};

const pt_kits_announce_cancelled = /** @type {(inputs: Kits_Announce_CancelledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Movimento cancelado. ${i?.name} voltou à posição ${i?.position}.`)
};

const ru_kits_announce_cancelled = /** @type {(inputs: Kits_Announce_CancelledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Перемещение отменено. ${i?.name} снова на позиции ${i?.position}.`)
};

const sv_kits_announce_cancelled = /** @type {(inputs: Kits_Announce_CancelledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Flytten avbröts. ${i?.name} är tillbaka på plats ${i?.position}.`)
};

const tr_kits_announce_cancelled = /** @type {(inputs: Kits_Announce_CancelledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Taşıma iptal edildi. ${i?.name} yeniden ${i?.position}. sırada.`)
};

const zh_kits_announce_cancelled = /** @type {(inputs: Kits_Announce_CancelledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已取消移动，${i?.name} 回到第 ${i?.position} 位。`)
};

const ja_kits_announce_cancelled = /** @type {(inputs: Kits_Announce_CancelledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`移動を取り消しました。${i?.name} は ${i?.position} 番目に戻りました。`)
};

/**
* | output |
* | --- |
* | "Move cancelled. {name} is back at position {position}." |
*
* @param {Kits_Announce_CancelledInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_announce_cancelled = /** @type {((inputs: Kits_Announce_CancelledInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Announce_CancelledInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_announce_cancelled(inputs)
	if (locale === "de") return de_kits_announce_cancelled(inputs)
	if (locale === "fr") return fr_kits_announce_cancelled(inputs)
	if (locale === "it") return it_kits_announce_cancelled(inputs)
	if (locale === "nl") return nl_kits_announce_cancelled(inputs)
	if (locale === "pl") return pl_kits_announce_cancelled(inputs)
	if (locale === "pt") return pt_kits_announce_cancelled(inputs)
	if (locale === "ru") return ru_kits_announce_cancelled(inputs)
	if (locale === "sv") return sv_kits_announce_cancelled(inputs)
	if (locale === "tr") return tr_kits_announce_cancelled(inputs)
	if (locale === "zh") return zh_kits_announce_cancelled(inputs)
	if (locale === "ja") return ja_kits_announce_cancelled(inputs)
	return en_kits_announce_cancelled(inputs)
});
