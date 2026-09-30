/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ email: NonNullable<unknown> }} Auth_Forgot_Sent_TextInputs */

const en_auth_forgot_sent_text = /** @type {(inputs: Auth_Forgot_Sent_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`If an account exists for ${i?.email}, a reset link is on its way. It works for 60 minutes.`)
};

const es_auth_forgot_sent_text = /** @type {(inputs: Auth_Forgot_Sent_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Si existe una cuenta con ${i?.email}, el enlace ya va de camino. Funciona durante 60 minutos.`)
};

const de_auth_forgot_sent_text = /** @type {(inputs: Auth_Forgot_Sent_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Falls es ein Konto für ${i?.email} gibt, ist ein Link zum Zurücksetzen unterwegs. Er ist 60 Minuten gültig.`)
};

const fr_auth_forgot_sent_text = /** @type {(inputs: Auth_Forgot_Sent_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Si un compte existe pour ${i?.email}, un lien de réinitialisation est en route. Il est valable 60 minutes.`)
};

const it_auth_forgot_sent_text = /** @type {(inputs: Auth_Forgot_Sent_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Se esiste un account per ${i?.email}, un link per reimpostare la password è in arrivo. Vale per 60 minuti.`)
};

const nl_auth_forgot_sent_text = /** @type {(inputs: Auth_Forgot_Sent_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Als er een account bestaat voor ${i?.email}, is er een herstellink onderweg. Die werkt 60 minuten.`)
};

const pl_auth_forgot_sent_text = /** @type {(inputs: Auth_Forgot_Sent_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jeśli istnieje konto dla ${i?.email}, link do resetu hasła jest już w drodze. Działa przez 60 minut.`)
};

const pt_auth_forgot_sent_text = /** @type {(inputs: Auth_Forgot_Sent_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Se existir uma conta para ${i?.email}, um link de redefinição está a caminho. Ele vale por 60 minutos.`)
};

const ru_auth_forgot_sent_text = /** @type {(inputs: Auth_Forgot_Sent_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Если аккаунт с адресом ${i?.email} существует, ссылка для сброса уже в пути. Она действует 60 минут.`)
};

const sv_auth_forgot_sent_text = /** @type {(inputs: Auth_Forgot_Sent_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Om det finns ett konto för ${i?.email} är en återställningslänk på väg. Den gäller i 60 minuter.`)
};

const tr_auth_forgot_sent_text = /** @type {(inputs: Auth_Forgot_Sent_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.email} için bir hesap varsa sıfırlama bağlantısı yolda. 60 dakika geçerlidir.`)
};

const zh_auth_forgot_sent_text = /** @type {(inputs: Auth_Forgot_Sent_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`如果 ${i?.email} 对应的账号存在，重置链接已在路上，60 分钟内有效。`)
};

const ja_auth_forgot_sent_text = /** @type {(inputs: Auth_Forgot_Sent_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.email} のアカウントが存在する場合、再設定用のリンクをお送りしました。有効期限は 60 分です。`)
};

/**
* | output |
* | --- |
* | "If an account exists for {email}, a reset link is on its way. It works for 60 minutes." |
*
* @param {Auth_Forgot_Sent_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_forgot_sent_text = /** @type {((inputs: Auth_Forgot_Sent_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Forgot_Sent_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_forgot_sent_text(inputs)
	if (locale === "de") return de_auth_forgot_sent_text(inputs)
	if (locale === "fr") return fr_auth_forgot_sent_text(inputs)
	if (locale === "it") return it_auth_forgot_sent_text(inputs)
	if (locale === "nl") return nl_auth_forgot_sent_text(inputs)
	if (locale === "pl") return pl_auth_forgot_sent_text(inputs)
	if (locale === "pt") return pt_auth_forgot_sent_text(inputs)
	if (locale === "ru") return ru_auth_forgot_sent_text(inputs)
	if (locale === "sv") return sv_auth_forgot_sent_text(inputs)
	if (locale === "tr") return tr_auth_forgot_sent_text(inputs)
	if (locale === "zh") return zh_auth_forgot_sent_text(inputs)
	if (locale === "ja") return ja_auth_forgot_sent_text(inputs)
	return en_auth_forgot_sent_text(inputs)
});
