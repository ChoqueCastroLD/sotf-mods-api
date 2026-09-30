/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_2fa_Staff_TextInputs */

const en_settings_2fa_staff_text = /** @type {(inputs: Settings_2fa_Staff_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderator and admin accounts can do a lot. Turn on two-step verification or add a passkey.`)
};

const es_settings_2fa_staff_text = /** @type {(inputs: Settings_2fa_Staff_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las cuentas de moderador y admin pueden hacer mucho. Activa la verificación en dos pasos o añade una clave de acceso.`)
};

const de_settings_2fa_staff_text = /** @type {(inputs: Settings_2fa_Staff_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderator- und Admin-Konten können viel bewirken. Aktiviere die Bestätigung in zwei Schritten oder füge einen Passkey hinzu.`)
};

const fr_settings_2fa_staff_text = /** @type {(inputs: Settings_2fa_Staff_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les comptes de modérateur et d’admin peuvent beaucoup. Activez la vérification en deux étapes ou ajoutez une clé d’accès.`)
};

const it_settings_2fa_staff_text = /** @type {(inputs: Settings_2fa_Staff_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gli account di moderatore e admin possono fare molto. Attiva la verifica in due passaggi o aggiungi una passkey.`)
};

const nl_settings_2fa_staff_text = /** @type {(inputs: Settings_2fa_Staff_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderator- en adminaccounts kunnen veel. Schakel verificatie in twee stappen in of voeg een passkey toe.`)
};

const pl_settings_2fa_staff_text = /** @type {(inputs: Settings_2fa_Staff_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konta moderatora i admina mogą wiele. Włącz weryfikację dwuetapową lub dodaj klucz dostępu.`)
};

const pt_settings_2fa_staff_text = /** @type {(inputs: Settings_2fa_Staff_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contas de moderador e admin podem muito. Ative a verificação em duas etapas ou adicione uma chave de acesso.`)
};

const ru_settings_2fa_staff_text = /** @type {(inputs: Settings_2fa_Staff_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Аккаунты модератора и админа имеют много возможностей. Включите двухэтапную проверку или добавьте ключ доступа.`)
};

const sv_settings_2fa_staff_text = /** @type {(inputs: Settings_2fa_Staff_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderator- och adminkonton kan göra mycket. Aktivera tvåstegsverifiering eller lägg till en passkey.`)
};

const tr_settings_2fa_staff_text = /** @type {(inputs: Settings_2fa_Staff_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moderatör ve yönetici hesapları çok şey yapabilir. İki adımlı doğrulamayı aç veya bir geçiş anahtarı ekle.`)
};

const zh_settings_2fa_staff_text = /** @type {(inputs: Settings_2fa_Staff_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版主和管理员账号权限很大。请开启两步验证或添加通行密钥。`)
};

const ja_settings_2fa_staff_text = /** @type {(inputs: Settings_2fa_Staff_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`モデレーターと管理者のアカウントは強い権限を持ちます。2段階認証をオンにするか、パスキーを追加してください。`)
};

/**
* | output |
* | --- |
* | "Moderator and admin accounts can do a lot. Turn on two-step verification or add a passkey." |
*
* @param {Settings_2fa_Staff_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_2fa_staff_text = /** @type {((inputs?: Settings_2fa_Staff_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_2fa_Staff_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_2fa_staff_text(inputs)
	if (locale === "de") return de_settings_2fa_staff_text(inputs)
	if (locale === "fr") return fr_settings_2fa_staff_text(inputs)
	if (locale === "it") return it_settings_2fa_staff_text(inputs)
	if (locale === "nl") return nl_settings_2fa_staff_text(inputs)
	if (locale === "pl") return pl_settings_2fa_staff_text(inputs)
	if (locale === "pt") return pt_settings_2fa_staff_text(inputs)
	if (locale === "ru") return ru_settings_2fa_staff_text(inputs)
	if (locale === "sv") return sv_settings_2fa_staff_text(inputs)
	if (locale === "tr") return tr_settings_2fa_staff_text(inputs)
	if (locale === "zh") return zh_settings_2fa_staff_text(inputs)
	if (locale === "ja") return ja_settings_2fa_staff_text(inputs)
	return en_settings_2fa_staff_text(inputs)
});
