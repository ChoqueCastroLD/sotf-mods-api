/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ position: NonNullable<unknown>, total: NonNullable<unknown> }} Basecamp_Media_MovedInputs */

const en_basecamp_media_moved = /** @type {(inputs: Basecamp_Media_MovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Moved to position ${i?.position} of ${i?.total}`)
};

const es_basecamp_media_moved = /** @type {(inputs: Basecamp_Media_MovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Movida a la posición ${i?.position} de ${i?.total}`)
};

const de_basecamp_media_moved = /** @type {(inputs: Basecamp_Media_MovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Auf Position ${i?.position} von ${i?.total} verschoben`)
};

const fr_basecamp_media_moved = /** @type {(inputs: Basecamp_Media_MovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Déplacée en position ${i?.position} sur ${i?.total}`)
};

const it_basecamp_media_moved = /** @type {(inputs: Basecamp_Media_MovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Spostata alla posizione ${i?.position} di ${i?.total}`)
};

const nl_basecamp_media_moved = /** @type {(inputs: Basecamp_Media_MovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verplaatst naar positie ${i?.position} van ${i?.total}`)
};

const pl_basecamp_media_moved = /** @type {(inputs: Basecamp_Media_MovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Przeniesiono na pozycję ${i?.position} z ${i?.total}`)
};

const pt_basecamp_media_moved = /** @type {(inputs: Basecamp_Media_MovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Movida para a posição ${i?.position} de ${i?.total}`)
};

const ru_basecamp_media_moved = /** @type {(inputs: Basecamp_Media_MovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Перемещено на позицию ${i?.position} из ${i?.total}`)
};

const sv_basecamp_media_moved = /** @type {(inputs: Basecamp_Media_MovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Flyttad till position ${i?.position} av ${i?.total}`)
};

const tr_basecamp_media_moved = /** @type {(inputs: Basecamp_Media_MovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.total} içinde ${i?.position}. sıraya taşındı`)
};

const zh_basecamp_media_moved = /** @type {(inputs: Basecamp_Media_MovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已移到第 ${i?.position} 位（共 ${i?.total} 张）`)
};

const ja_basecamp_media_moved = /** @type {(inputs: Basecamp_Media_MovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.total} 枚中 ${i?.position} 番目に移動しました`)
};

/**
* | output |
* | --- |
* | "Moved to position {position} of {total}" |
*
* @param {Basecamp_Media_MovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_media_moved = /** @type {((inputs: Basecamp_Media_MovedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Media_MovedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_media_moved(inputs)
	if (locale === "de") return de_basecamp_media_moved(inputs)
	if (locale === "fr") return fr_basecamp_media_moved(inputs)
	if (locale === "it") return it_basecamp_media_moved(inputs)
	if (locale === "nl") return nl_basecamp_media_moved(inputs)
	if (locale === "pl") return pl_basecamp_media_moved(inputs)
	if (locale === "pt") return pt_basecamp_media_moved(inputs)
	if (locale === "ru") return ru_basecamp_media_moved(inputs)
	if (locale === "sv") return sv_basecamp_media_moved(inputs)
	if (locale === "tr") return tr_basecamp_media_moved(inputs)
	if (locale === "zh") return zh_basecamp_media_moved(inputs)
	if (locale === "ja") return ja_basecamp_media_moved(inputs)
	return en_basecamp_media_moved(inputs)
});
