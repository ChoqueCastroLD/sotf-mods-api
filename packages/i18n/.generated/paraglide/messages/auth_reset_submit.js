/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Reset_SubmitInputs */

const en_auth_reset_submit = /** @type {(inputs: Auth_Reset_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save new password`)
};

const es_auth_reset_submit = /** @type {(inputs: Auth_Reset_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardar contraseña nueva`)
};

const de_auth_reset_submit = /** @type {(inputs: Auth_Reset_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neues Passwort speichern`)
};

const fr_auth_reset_submit = /** @type {(inputs: Auth_Reset_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrer le mot de passe`)
};

const it_auth_reset_submit = /** @type {(inputs: Auth_Reset_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salva la nuova password`)
};

const nl_auth_reset_submit = /** @type {(inputs: Auth_Reset_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuw wachtwoord opslaan`)
};

const pl_auth_reset_submit = /** @type {(inputs: Auth_Reset_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisz nowe hasło`)
};

const pt_auth_reset_submit = /** @type {(inputs: Auth_Reset_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvar nova senha`)
};

const ru_auth_reset_submit = /** @type {(inputs: Auth_Reset_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сохранить новый пароль`)
};

const sv_auth_reset_submit = /** @type {(inputs: Auth_Reset_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spara nytt lösenord`)
};

const tr_auth_reset_submit = /** @type {(inputs: Auth_Reset_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni şifreyi kaydet`)
};

const zh_auth_reset_submit = /** @type {(inputs: Auth_Reset_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存新密码`)
};

const ja_auth_reset_submit = /** @type {(inputs: Auth_Reset_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいパスワードを保存`)
};

/**
* | output |
* | --- |
* | "Save new password" |
*
* @param {Auth_Reset_SubmitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_reset_submit = /** @type {((inputs?: Auth_Reset_SubmitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Reset_SubmitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_reset_submit(inputs)
	if (locale === "de") return de_auth_reset_submit(inputs)
	if (locale === "fr") return fr_auth_reset_submit(inputs)
	if (locale === "it") return it_auth_reset_submit(inputs)
	if (locale === "nl") return nl_auth_reset_submit(inputs)
	if (locale === "pl") return pl_auth_reset_submit(inputs)
	if (locale === "pt") return pt_auth_reset_submit(inputs)
	if (locale === "ru") return ru_auth_reset_submit(inputs)
	if (locale === "sv") return sv_auth_reset_submit(inputs)
	if (locale === "tr") return tr_auth_reset_submit(inputs)
	if (locale === "zh") return zh_auth_reset_submit(inputs)
	if (locale === "ja") return ja_auth_reset_submit(inputs)
	return en_auth_reset_submit(inputs)
});
