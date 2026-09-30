/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Settings_Passkeys_Remove_TextInputs */

const en_settings_passkeys_remove_text = /** @type {(inputs: Settings_Passkeys_Remove_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Enter your password to remove ${i?.name}. You will no longer be able to sign in with it.`)
};

const es_settings_passkeys_remove_text = /** @type {(inputs: Settings_Passkeys_Remove_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Introduce tu contraseña para eliminar ${i?.name}. Ya no podrás iniciar sesión con ella.`)
};

const de_settings_passkeys_remove_text = /** @type {(inputs: Settings_Passkeys_Remove_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gib dein Passwort ein, um ${i?.name} zu entfernen. Du kannst dich damit dann nicht mehr anmelden.`)
};

const fr_settings_passkeys_remove_text = /** @type {(inputs: Settings_Passkeys_Remove_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Saisissez votre mot de passe pour supprimer ${i?.name}. Vous ne pourrez plus vous connecter avec.`)
};

const it_settings_passkeys_remove_text = /** @type {(inputs: Settings_Passkeys_Remove_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Inserisci la password per rimuovere ${i?.name}. Non potrai più accedere con essa.`)
};

const nl_settings_passkeys_remove_text = /** @type {(inputs: Settings_Passkeys_Remove_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Voer je wachtwoord in om ${i?.name} te verwijderen. Je kunt er dan niet meer mee inloggen.`)
};

const pl_settings_passkeys_remove_text = /** @type {(inputs: Settings_Passkeys_Remove_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Podaj hasło, aby usunąć ${i?.name}. Nie będziesz mógł się już nim logować.`)
};

const pt_settings_passkeys_remove_text = /** @type {(inputs: Settings_Passkeys_Remove_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Digite sua senha para remover ${i?.name}. Você não poderá mais entrar com ela.`)
};

const ru_settings_passkeys_remove_text = /** @type {(inputs: Settings_Passkeys_Remove_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Введите пароль, чтобы удалить ${i?.name}. Вы больше не сможете входить с его помощью.`)
};

const sv_settings_passkeys_remove_text = /** @type {(inputs: Settings_Passkeys_Remove_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ange ditt lösenord för att ta bort ${i?.name}. Du kommer inte längre kunna logga in med den.`)
};

const tr_settings_passkeys_remove_text = /** @type {(inputs: Settings_Passkeys_Remove_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} anahtarını kaldırmak için şifreni gir. Artık onunla giriş yapamazsın.`)
};

const zh_settings_passkeys_remove_text = /** @type {(inputs: Settings_Passkeys_Remove_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`输入密码以移除 ${i?.name}。之后将无法再用它登录。`)
};

const ja_settings_passkeys_remove_text = /** @type {(inputs: Settings_Passkeys_Remove_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を削除するにはパスワードを入力してください。以後、このパスキーではログインできません。`)
};

/**
* | output |
* | --- |
* | "Enter your password to remove {name}. You will no longer be able to sign in with it." |
*
* @param {Settings_Passkeys_Remove_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_passkeys_remove_text = /** @type {((inputs: Settings_Passkeys_Remove_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Passkeys_Remove_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_passkeys_remove_text(inputs)
	if (locale === "de") return de_settings_passkeys_remove_text(inputs)
	if (locale === "fr") return fr_settings_passkeys_remove_text(inputs)
	if (locale === "it") return it_settings_passkeys_remove_text(inputs)
	if (locale === "nl") return nl_settings_passkeys_remove_text(inputs)
	if (locale === "pl") return pl_settings_passkeys_remove_text(inputs)
	if (locale === "pt") return pt_settings_passkeys_remove_text(inputs)
	if (locale === "ru") return ru_settings_passkeys_remove_text(inputs)
	if (locale === "sv") return sv_settings_passkeys_remove_text(inputs)
	if (locale === "tr") return tr_settings_passkeys_remove_text(inputs)
	if (locale === "zh") return zh_settings_passkeys_remove_text(inputs)
	if (locale === "ja") return ja_settings_passkeys_remove_text(inputs)
	return en_settings_passkeys_remove_text(inputs)
});
