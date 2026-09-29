/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Email_Notice_Not_YouInputs */

const en_emails_auth_email_notice_not_you = /** @type {(inputs: Emails_Auth_Email_Notice_Not_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wasn’t you? Change your password now and review your sessions.`)
};

const es_emails_auth_email_notice_not_you = /** @type {(inputs: Emails_Auth_Email_Notice_Not_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿No has sido tú? Cambia tu contraseña ahora y revisa tus sesiones.`)
};

const de_emails_auth_email_notice_not_you = /** @type {(inputs: Emails_Auth_Email_Notice_Not_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Warst du das nicht? Ändere jetzt dein Passwort und prüfe deine Sitzungen.`)
};

const fr_emails_auth_email_notice_not_you = /** @type {(inputs: Emails_Auth_Email_Notice_Not_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce n’était pas vous ? Changez votre mot de passe maintenant et vérifiez vos sessions.`)
};

const it_emails_auth_email_notice_not_you = /** @type {(inputs: Emails_Auth_Email_Notice_Not_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non sei stato tu? Cambia subito la password e controlla le sessioni.`)
};

const nl_emails_auth_email_notice_not_you = /** @type {(inputs: Emails_Auth_Email_Notice_Not_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Was jij dit niet? Wijzig nu je wachtwoord en controleer je sessies.`)
};

const pl_emails_auth_email_notice_not_you = /** @type {(inputs: Emails_Auth_Email_Notice_Not_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To nie Ty? Zmień teraz hasło i sprawdź sesje.`)
};

const pt_emails_auth_email_notice_not_you = /** @type {(inputs: Emails_Auth_Email_Notice_Not_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi você? Altere sua senha agora e revise suas sessões.`)
};

const ru_emails_auth_email_notice_not_you = /** @type {(inputs: Emails_Auth_Email_Notice_Not_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Это были не вы? Смените пароль сейчас и проверьте сеансы.`)
};

const sv_emails_auth_email_notice_not_you = /** @type {(inputs: Emails_Auth_Email_Notice_Not_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Var det inte du? Byt lösenord nu och granska dina sessioner.`)
};

const tr_emails_auth_email_notice_not_you = /** @type {(inputs: Emails_Auth_Email_Notice_Not_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sen değil miydin? Şifreni şimdi değiştir ve oturumlarını gözden geçir.`)
};

const zh_emails_auth_email_notice_not_you = /** @type {(inputs: Emails_Auth_Email_Notice_Not_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不是你本人？请立即修改密码并检查你的会话。`)
};

const ja_emails_auth_email_notice_not_you = /** @type {(inputs: Emails_Auth_Email_Notice_Not_YouInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`心当たりがない場合は、今すぐパスワードを変更し、セッションを確認してください。`)
};

/**
* | output |
* | --- |
* | "Wasn’t you? Change your password now and review your sessions." |
*
* @param {Emails_Auth_Email_Notice_Not_YouInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_email_notice_not_you = /** @type {((inputs?: Emails_Auth_Email_Notice_Not_YouInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Email_Notice_Not_YouInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_email_notice_not_you(inputs)
	if (locale === "de") return de_emails_auth_email_notice_not_you(inputs)
	if (locale === "fr") return fr_emails_auth_email_notice_not_you(inputs)
	if (locale === "it") return it_emails_auth_email_notice_not_you(inputs)
	if (locale === "nl") return nl_emails_auth_email_notice_not_you(inputs)
	if (locale === "pl") return pl_emails_auth_email_notice_not_you(inputs)
	if (locale === "pt") return pt_emails_auth_email_notice_not_you(inputs)
	if (locale === "ru") return ru_emails_auth_email_notice_not_you(inputs)
	if (locale === "sv") return sv_emails_auth_email_notice_not_you(inputs)
	if (locale === "tr") return tr_emails_auth_email_notice_not_you(inputs)
	if (locale === "zh") return zh_emails_auth_email_notice_not_you(inputs)
	if (locale === "ja") return ja_emails_auth_email_notice_not_you(inputs)
	return en_emails_auth_email_notice_not_you(inputs)
});
