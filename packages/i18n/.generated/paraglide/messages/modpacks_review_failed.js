/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Review_FailedInputs */

const en_modpacks_review_failed = /** @type {(inputs: Modpacks_Review_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't change the approval`)
};

const es_modpacks_review_failed = /** @type {(inputs: Modpacks_Review_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo cambiar la aprobación`)
};

const de_modpacks_review_failed = /** @type {(inputs: Modpacks_Review_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Freigabe konnte nicht geändert werden`)
};

const fr_modpacks_review_failed = /** @type {(inputs: Modpacks_Review_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de modifier l’approbation`)
};

const it_modpacks_review_failed = /** @type {(inputs: Modpacks_Review_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile modificare l’approvazione`)
};

const nl_modpacks_review_failed = /** @type {(inputs: Modpacks_Review_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kan de goedkeuring niet wijzigen`)
};

const pl_modpacks_review_failed = /** @type {(inputs: Modpacks_Review_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zmienić zatwierdzenia`)
};

const pt_modpacks_review_failed = /** @type {(inputs: Modpacks_Review_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível alterar a aprovação`)
};

const ru_modpacks_review_failed = /** @type {(inputs: Modpacks_Review_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось изменить статус одобрения`)
};

const sv_modpacks_review_failed = /** @type {(inputs: Modpacks_Review_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att ändra godkännandet`)
};

const tr_modpacks_review_failed = /** @type {(inputs: Modpacks_Review_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onay durumu değiştirilemedi`)
};

const zh_modpacks_review_failed = /** @type {(inputs: Modpacks_Review_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法更改审核状态`)
};

const ja_modpacks_review_failed = /** @type {(inputs: Modpacks_Review_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`承認状態を変更できませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn't change the approval" |
*
* @param {Modpacks_Review_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_review_failed = /** @type {((inputs?: Modpacks_Review_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Review_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_review_failed(inputs)
	if (locale === "de") return de_modpacks_review_failed(inputs)
	if (locale === "fr") return fr_modpacks_review_failed(inputs)
	if (locale === "it") return it_modpacks_review_failed(inputs)
	if (locale === "nl") return nl_modpacks_review_failed(inputs)
	if (locale === "pl") return pl_modpacks_review_failed(inputs)
	if (locale === "pt") return pt_modpacks_review_failed(inputs)
	if (locale === "ru") return ru_modpacks_review_failed(inputs)
	if (locale === "sv") return sv_modpacks_review_failed(inputs)
	if (locale === "tr") return tr_modpacks_review_failed(inputs)
	if (locale === "zh") return zh_modpacks_review_failed(inputs)
	if (locale === "ja") return ja_modpacks_review_failed(inputs)
	return en_modpacks_review_failed(inputs)
});
