/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Security_Change_Not_YouInputs */

const en_emails_auth_security_change_not_you = /** @type {(inputs: Emails_Auth_Security_Change_Not_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wasn’t you? Reset your password right away and review your active sessions.`)
};

const es_emails_auth_security_change_not_you = /** @type {(inputs: Emails_Auth_Security_Change_Not_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿No has sido tú? Restablece tu contraseña ahora mismo y revisa tus sesiones activas.`)
};

const de_emails_auth_security_change_not_you = /** @type {(inputs: Emails_Auth_Security_Change_Not_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht du? Setze sofort dein Passwort zurück und prüfe deine aktiven Sitzungen.`)
};

const fr_emails_auth_security_change_not_you = /** @type {(inputs: Emails_Auth_Security_Change_Not_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce n’était pas vous ? Réinitialisez votre mot de passe immédiatement et vérifiez vos sessions actives.`)
};

const it_emails_auth_security_change_not_you = /** @type {(inputs: Emails_Auth_Security_Change_Not_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non sei stato tu? Reimposta subito la password e controlla le sessioni attive.`)
};

const nl_emails_auth_security_change_not_you = /** @type {(inputs: Emails_Auth_Security_Change_Not_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet jij? Herstel meteen je wachtwoord en controleer je actieve sessies.`)
};

const pl_emails_auth_security_change_not_you = /** @type {(inputs: Emails_Auth_Security_Change_Not_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To nie Ty? Natychmiast zresetuj hasło i sprawdź aktywne sesje.`)
};

const pt_emails_auth_security_change_not_you = /** @type {(inputs: Emails_Auth_Security_Change_Not_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi você? Redefina sua senha agora mesmo e revise suas sessões ativas.`)
};

const ru_emails_auth_security_change_not_you = /** @type {(inputs: Emails_Auth_Security_Change_Not_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Это были не вы? Немедленно сбросьте пароль и проверьте активные сеансы.`)
};

const sv_emails_auth_security_change_not_you = /** @type {(inputs: Emails_Auth_Security_Change_Not_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Var det inte du? Återställ ditt lösenord direkt och granska dina aktiva sessioner.`)
};

const tr_emails_auth_security_change_not_you = /** @type {(inputs: Emails_Auth_Security_Change_Not_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sen değil miydin? Şifreni hemen sıfırla ve etkin oturumlarını gözden geçir.`)
};

const zh_emails_auth_security_change_not_you = /** @type {(inputs: Emails_Auth_Security_Change_Not_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不是你？请立即重置密码并检查你的活动会话。`)
};

const ja_emails_auth_security_change_not_you = /** @type {(inputs: Emails_Auth_Security_Change_Not_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`心当たりがない場合は、すぐにパスワードをリセットし、アクティブなセッションを確認してください。`)
};

/**
* | output |
* | --- |
* | "Wasn’t you? Reset your password right away and review your active sessions." |
*
* @param {Emails_Auth_Security_Change_Not_YouInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_security_change_not_you = /** @type {((inputs?: Emails_Auth_Security_Change_Not_YouInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Security_Change_Not_YouInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_security_change_not_you(inputs)
	if (locale === "de") return de_emails_auth_security_change_not_you(inputs)
	if (locale === "fr") return fr_emails_auth_security_change_not_you(inputs)
	if (locale === "it") return it_emails_auth_security_change_not_you(inputs)
	if (locale === "nl") return nl_emails_auth_security_change_not_you(inputs)
	if (locale === "pl") return pl_emails_auth_security_change_not_you(inputs)
	if (locale === "pt") return pt_emails_auth_security_change_not_you(inputs)
	if (locale === "ru") return ru_emails_auth_security_change_not_you(inputs)
	if (locale === "sv") return sv_emails_auth_security_change_not_you(inputs)
	if (locale === "tr") return tr_emails_auth_security_change_not_you(inputs)
	if (locale === "zh") return zh_emails_auth_security_change_not_you(inputs)
	if (locale === "ja") return ja_emails_auth_security_change_not_you(inputs)
	return en_emails_auth_security_change_not_you(inputs)
});
