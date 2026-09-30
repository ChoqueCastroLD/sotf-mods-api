/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Toast_Verify_EmailInputs */

const en_mod_toast_verify_email = /** @type {(inputs: Mod_Toast_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verify your email first. Check your inbox.`)
};

const es_mod_toast_verify_email = /** @type {(inputs: Mod_Toast_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primero verifica tu correo. Revisa tu bandeja de entrada.`)
};

const de_mod_toast_verify_email = /** @type {(inputs: Mod_Toast_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestätige zuerst deine E-Mail-Adresse. Schau in dein Postfach.`)
};

const fr_mod_toast_verify_email = /** @type {(inputs: Mod_Toast_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérifiez d’abord votre e-mail. Regardez votre boîte de réception.`)
};

const it_mod_toast_verify_email = /** @type {(inputs: Mod_Toast_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prima verifica la tua email. Controlla la posta in arrivo.`)
};

const nl_mod_toast_verify_email = /** @type {(inputs: Mod_Toast_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bevestig eerst je e-mailadres. Kijk in je inbox.`)
};

const pl_mod_toast_verify_email = /** @type {(inputs: Mod_Toast_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najpierw potwierdź adres e-mail. Sprawdź skrzynkę.`)
};

const pt_mod_toast_verify_email = /** @type {(inputs: Mod_Toast_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirme seu e-mail primeiro. Veja sua caixa de entrada.`)
};

const ru_mod_toast_verify_email = /** @type {(inputs: Mod_Toast_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сначала подтвердите почту. Проверьте входящие.`)
};

const sv_mod_toast_verify_email = /** @type {(inputs: Mod_Toast_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifiera din e-post först. Kolla inkorgen.`)
};

const tr_mod_toast_verify_email = /** @type {(inputs: Mod_Toast_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önce e-postanı doğrula. Gelen kutunu kontrol et.`)
};

const zh_mod_toast_verify_email = /** @type {(inputs: Mod_Toast_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请先验证邮箱，查看你的收件箱。`)
};

const ja_mod_toast_verify_email = /** @type {(inputs: Mod_Toast_Verify_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`先にメールアドレスを確認してください。受信トレイをチェックしましょう。`)
};

/**
* | output |
* | --- |
* | "Verify your email first. Check your inbox." |
*
* @param {Mod_Toast_Verify_EmailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_toast_verify_email = /** @type {((inputs?: Mod_Toast_Verify_EmailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Toast_Verify_EmailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_toast_verify_email(inputs)
	if (locale === "de") return de_mod_toast_verify_email(inputs)
	if (locale === "fr") return fr_mod_toast_verify_email(inputs)
	if (locale === "it") return it_mod_toast_verify_email(inputs)
	if (locale === "nl") return nl_mod_toast_verify_email(inputs)
	if (locale === "pl") return pl_mod_toast_verify_email(inputs)
	if (locale === "pt") return pt_mod_toast_verify_email(inputs)
	if (locale === "ru") return ru_mod_toast_verify_email(inputs)
	if (locale === "sv") return sv_mod_toast_verify_email(inputs)
	if (locale === "tr") return tr_mod_toast_verify_email(inputs)
	if (locale === "zh") return zh_mod_toast_verify_email(inputs)
	if (locale === "ja") return ja_mod_toast_verify_email(inputs)
	return en_mod_toast_verify_email(inputs)
});
