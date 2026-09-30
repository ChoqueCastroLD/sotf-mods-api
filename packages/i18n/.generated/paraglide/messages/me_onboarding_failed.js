/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Onboarding_FailedInputs */

const en_me_onboarding_failed = /** @type {(inputs: Me_Onboarding_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t update the checklist`)
};

const es_me_onboarding_failed = /** @type {(inputs: Me_Onboarding_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se ha podido actualizar la lista`)
};

const de_me_onboarding_failed = /** @type {(inputs: Me_Onboarding_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Checkliste konnte nicht aktualisiert werden`)
};

const fr_me_onboarding_failed = /** @type {(inputs: Me_Onboarding_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de mettre à jour la liste`)
};

const it_me_onboarding_failed = /** @type {(inputs: Me_Onboarding_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile aggiornare la lista`)
};

const nl_me_onboarding_failed = /** @type {(inputs: Me_Onboarding_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De checklist kon niet worden bijgewerkt`)
};

const pl_me_onboarding_failed = /** @type {(inputs: Me_Onboarding_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zaktualizować listy`)
};

const pt_me_onboarding_failed = /** @type {(inputs: Me_Onboarding_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível atualizar a lista`)
};

const ru_me_onboarding_failed = /** @type {(inputs: Me_Onboarding_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось обновить список`)
};

const sv_me_onboarding_failed = /** @type {(inputs: Me_Onboarding_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att uppdatera listan`)
};

const tr_me_onboarding_failed = /** @type {(inputs: Me_Onboarding_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liste güncellenemedi`)
};

const zh_me_onboarding_failed = /** @type {(inputs: Me_Onboarding_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法更新清单`)
};

const ja_me_onboarding_failed = /** @type {(inputs: Me_Onboarding_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チェックリストを更新できませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn’t update the checklist" |
*
* @param {Me_Onboarding_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_onboarding_failed = /** @type {((inputs?: Me_Onboarding_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Onboarding_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_onboarding_failed(inputs)
	if (locale === "de") return de_me_onboarding_failed(inputs)
	if (locale === "fr") return fr_me_onboarding_failed(inputs)
	if (locale === "it") return it_me_onboarding_failed(inputs)
	if (locale === "nl") return nl_me_onboarding_failed(inputs)
	if (locale === "pl") return pl_me_onboarding_failed(inputs)
	if (locale === "pt") return pt_me_onboarding_failed(inputs)
	if (locale === "ru") return ru_me_onboarding_failed(inputs)
	if (locale === "sv") return sv_me_onboarding_failed(inputs)
	if (locale === "tr") return tr_me_onboarding_failed(inputs)
	if (locale === "zh") return zh_me_onboarding_failed(inputs)
	if (locale === "ja") return ja_me_onboarding_failed(inputs)
	return en_me_onboarding_failed(inputs)
});
