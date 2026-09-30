/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Verify_Invalid_TextInputs */

const en_auth_verify_invalid_text = /** @type {(inputs: Auth_Verify_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verification links work once and expire after 24 hours. Ask for a new one.`)
};

const es_auth_verify_invalid_text = /** @type {(inputs: Auth_Verify_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los enlaces de verificación sirven una vez y caducan a las 24 horas. Pide uno nuevo.`)
};

const de_auth_verify_invalid_text = /** @type {(inputs: Auth_Verify_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestätigungslinks funktionieren einmal und laufen nach 24 Stunden ab. Fordere einen neuen an.`)
};

const fr_auth_verify_invalid_text = /** @type {(inputs: Auth_Verify_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les liens de vérification ne servent qu’une fois et expirent au bout de 24 heures. Demandez-en un nouveau.`)
};

const it_auth_verify_invalid_text = /** @type {(inputs: Auth_Verify_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I link di verifica valgono una volta e scadono dopo 24 ore. Richiedine uno nuovo.`)
};

const nl_auth_verify_invalid_text = /** @type {(inputs: Auth_Verify_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bevestigingslinks werken één keer en verlopen na 24 uur. Vraag een nieuwe aan.`)
};

const pl_auth_verify_invalid_text = /** @type {(inputs: Auth_Verify_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Linki weryfikacyjne działają raz i wygasają po 24 godzinach. Poproś o nowy.`)
};

const pt_auth_verify_invalid_text = /** @type {(inputs: Auth_Verify_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os links de confirmação funcionam uma vez e expiram em 24 horas. Peça um novo.`)
};

const ru_auth_verify_invalid_text = /** @type {(inputs: Auth_Verify_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ссылки для подтверждения действуют один раз и истекают через 24 часа. Запросите новую.`)
};

const sv_auth_verify_invalid_text = /** @type {(inputs: Auth_Verify_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekräftelselänkar fungerar en gång och går ut efter 24 timmar. Be om en ny.`)
};

const tr_auth_verify_invalid_text = /** @type {(inputs: Auth_Verify_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doğrulama bağlantıları bir kez çalışır ve 24 saat sonra geçersiz olur. Yenisini iste.`)
};

const zh_auth_verify_invalid_text = /** @type {(inputs: Auth_Verify_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`验证链接只能使用一次，24 小时后失效。请重新申请。`)
};

const ja_auth_verify_invalid_text = /** @type {(inputs: Auth_Verify_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`確認用リンクは 1 回だけ使え、24 時間で期限切れになります。新しいリンクをリクエストしてください。`)
};

/**
* | output |
* | --- |
* | "Verification links work once and expire after 24 hours. Ask for a new one." |
*
* @param {Auth_Verify_Invalid_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_verify_invalid_text = /** @type {((inputs?: Auth_Verify_Invalid_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Verify_Invalid_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_verify_invalid_text(inputs)
	if (locale === "de") return de_auth_verify_invalid_text(inputs)
	if (locale === "fr") return fr_auth_verify_invalid_text(inputs)
	if (locale === "it") return it_auth_verify_invalid_text(inputs)
	if (locale === "nl") return nl_auth_verify_invalid_text(inputs)
	if (locale === "pl") return pl_auth_verify_invalid_text(inputs)
	if (locale === "pt") return pt_auth_verify_invalid_text(inputs)
	if (locale === "ru") return ru_auth_verify_invalid_text(inputs)
	if (locale === "sv") return sv_auth_verify_invalid_text(inputs)
	if (locale === "tr") return tr_auth_verify_invalid_text(inputs)
	if (locale === "zh") return zh_auth_verify_invalid_text(inputs)
	if (locale === "ja") return ja_auth_verify_invalid_text(inputs)
	return en_auth_verify_invalid_text(inputs)
});
