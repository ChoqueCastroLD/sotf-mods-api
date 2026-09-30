/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_2fa_FailedInputs */

const en_settings_2fa_failed = /** @type {(inputs: Settings_2fa_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not update two-step verification.`)
};

const es_settings_2fa_failed = /** @type {(inputs: Settings_2fa_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo actualizar la verificación en dos pasos.`)
};

const de_settings_2fa_failed = /** @type {(inputs: Settings_2fa_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Bestätigung in zwei Schritten konnte nicht aktualisiert werden.`)
};

const fr_settings_2fa_failed = /** @type {(inputs: Settings_2fa_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de mettre à jour la vérification en deux étapes.`)
};

const it_settings_2fa_failed = /** @type {(inputs: Settings_2fa_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile aggiornare la verifica in due passaggi.`)
};

const nl_settings_2fa_failed = /** @type {(inputs: Settings_2fa_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificatie in twee stappen kon niet worden bijgewerkt.`)
};

const pl_settings_2fa_failed = /** @type {(inputs: Settings_2fa_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zaktualizować weryfikacji dwuetapowej.`)
};

const pt_settings_2fa_failed = /** @type {(inputs: Settings_2fa_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível atualizar a verificação em duas etapas.`)
};

const ru_settings_2fa_failed = /** @type {(inputs: Settings_2fa_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось обновить двухэтапную проверку.`)
};

const sv_settings_2fa_failed = /** @type {(inputs: Settings_2fa_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att uppdatera tvåstegsverifieringen.`)
};

const tr_settings_2fa_failed = /** @type {(inputs: Settings_2fa_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İki adımlı doğrulama güncellenemedi.`)
};

const zh_settings_2fa_failed = /** @type {(inputs: Settings_2fa_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法更新两步验证。`)
};

const ja_settings_2fa_failed = /** @type {(inputs: Settings_2fa_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`2段階認証を更新できませんでした。`)
};

/**
* | output |
* | --- |
* | "Could not update two-step verification." |
*
* @param {Settings_2fa_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_2fa_failed = /** @type {((inputs?: Settings_2fa_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_2fa_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_2fa_failed(inputs)
	if (locale === "de") return de_settings_2fa_failed(inputs)
	if (locale === "fr") return fr_settings_2fa_failed(inputs)
	if (locale === "it") return it_settings_2fa_failed(inputs)
	if (locale === "nl") return nl_settings_2fa_failed(inputs)
	if (locale === "pl") return pl_settings_2fa_failed(inputs)
	if (locale === "pt") return pt_settings_2fa_failed(inputs)
	if (locale === "ru") return ru_settings_2fa_failed(inputs)
	if (locale === "sv") return sv_settings_2fa_failed(inputs)
	if (locale === "tr") return tr_settings_2fa_failed(inputs)
	if (locale === "zh") return zh_settings_2fa_failed(inputs)
	if (locale === "ja") return ja_settings_2fa_failed(inputs)
	return en_settings_2fa_failed(inputs)
});
