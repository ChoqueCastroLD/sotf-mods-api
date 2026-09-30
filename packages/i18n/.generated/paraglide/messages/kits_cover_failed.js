/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Cover_FailedInputs */

const en_kits_cover_failed = /** @type {(inputs: Kits_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t update the cover.`)
};

const es_kits_cover_failed = /** @type {(inputs: Kits_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se ha podido actualizar la portada.`)
};

const de_kits_cover_failed = /** @type {(inputs: Kits_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Titelbild konnte nicht aktualisiert werden.`)
};

const fr_kits_cover_failed = /** @type {(inputs: Kits_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de mettre à jour la couverture.`)
};

const it_kits_cover_failed = /** @type {(inputs: Kits_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile aggiornare la copertina.`)
};

const nl_kits_cover_failed = /** @type {(inputs: Kits_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het omslag kon niet worden bijgewerkt.`)
};

const pl_kits_cover_failed = /** @type {(inputs: Kits_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zaktualizować okładki.`)
};

const pt_kits_cover_failed = /** @type {(inputs: Kits_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível atualizar a capa.`)
};

const ru_kits_cover_failed = /** @type {(inputs: Kits_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось обновить обложку.`)
};

const sv_kits_cover_failed = /** @type {(inputs: Kits_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att uppdatera omslaget.`)
};

const tr_kits_cover_failed = /** @type {(inputs: Kits_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapak güncellenemedi.`)
};

const zh_kits_cover_failed = /** @type {(inputs: Kits_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`封面更新失败。`)
};

const ja_kits_cover_failed = /** @type {(inputs: Kits_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カバーを更新できませんでした。`)
};

/**
* | output |
* | --- |
* | "Couldn’t update the cover." |
*
* @param {Kits_Cover_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_cover_failed = /** @type {((inputs?: Kits_Cover_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Cover_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_cover_failed(inputs)
	if (locale === "de") return de_kits_cover_failed(inputs)
	if (locale === "fr") return fr_kits_cover_failed(inputs)
	if (locale === "it") return it_kits_cover_failed(inputs)
	if (locale === "nl") return nl_kits_cover_failed(inputs)
	if (locale === "pl") return pl_kits_cover_failed(inputs)
	if (locale === "pt") return pt_kits_cover_failed(inputs)
	if (locale === "ru") return ru_kits_cover_failed(inputs)
	if (locale === "sv") return sv_kits_cover_failed(inputs)
	if (locale === "tr") return tr_kits_cover_failed(inputs)
	if (locale === "zh") return zh_kits_cover_failed(inputs)
	if (locale === "ja") return ja_kits_cover_failed(inputs)
	return en_kits_cover_failed(inputs)
});
