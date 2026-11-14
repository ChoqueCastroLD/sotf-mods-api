/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Cover_FailedInputs */

const en_modpacks_cover_failed = /** @type {(inputs: Modpacks_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't upload the cover`)
};

const es_modpacks_cover_failed = /** @type {(inputs: Modpacks_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo subir la portada`)
};

const de_modpacks_cover_failed = /** @type {(inputs: Modpacks_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titelbild konnte nicht hochgeladen werden`)
};

const fr_modpacks_cover_failed = /** @type {(inputs: Modpacks_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible d’envoyer la couverture`)
};

const it_modpacks_cover_failed = /** @type {(inputs: Modpacks_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile caricare la copertina`)
};

const nl_modpacks_cover_failed = /** @type {(inputs: Modpacks_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kan de omslag niet uploaden`)
};

const pl_modpacks_cover_failed = /** @type {(inputs: Modpacks_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się przesłać okładki`)
};

const pt_modpacks_cover_failed = /** @type {(inputs: Modpacks_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível enviar a capa`)
};

const ru_modpacks_cover_failed = /** @type {(inputs: Modpacks_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось загрузить обложку`)
};

const sv_modpacks_cover_failed = /** @type {(inputs: Modpacks_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att ladda upp omslaget`)
};

const tr_modpacks_cover_failed = /** @type {(inputs: Modpacks_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapak yüklenemedi`)
};

const zh_modpacks_cover_failed = /** @type {(inputs: Modpacks_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法上传封面`)
};

const ja_modpacks_cover_failed = /** @type {(inputs: Modpacks_Cover_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カバーをアップロードできませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn't upload the cover" |
*
* @param {Modpacks_Cover_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_cover_failed = /** @type {((inputs?: Modpacks_Cover_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Cover_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_cover_failed(inputs)
	if (locale === "de") return de_modpacks_cover_failed(inputs)
	if (locale === "fr") return fr_modpacks_cover_failed(inputs)
	if (locale === "it") return it_modpacks_cover_failed(inputs)
	if (locale === "nl") return nl_modpacks_cover_failed(inputs)
	if (locale === "pl") return pl_modpacks_cover_failed(inputs)
	if (locale === "pt") return pt_modpacks_cover_failed(inputs)
	if (locale === "ru") return ru_modpacks_cover_failed(inputs)
	if (locale === "sv") return sv_modpacks_cover_failed(inputs)
	if (locale === "tr") return tr_modpacks_cover_failed(inputs)
	if (locale === "zh") return zh_modpacks_cover_failed(inputs)
	if (locale === "ja") return ja_modpacks_cover_failed(inputs)
	return en_modpacks_cover_failed(inputs)
});
