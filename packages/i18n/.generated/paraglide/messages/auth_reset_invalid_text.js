/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Reset_Invalid_TextInputs */

const en_auth_reset_invalid_text = /** @type {(inputs: Auth_Reset_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reset links work once and expire after 60 minutes. Ask for a new one.`)
};

const es_auth_reset_invalid_text = /** @type {(inputs: Auth_Reset_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los enlaces de restablecimiento sirven una vez y caducan a los 60 minutos. Pide uno nuevo.`)
};

const de_auth_reset_invalid_text = /** @type {(inputs: Auth_Reset_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Links zum Zurücksetzen funktionieren einmal und laufen nach 60 Minuten ab. Fordere einen neuen an.`)
};

const fr_auth_reset_invalid_text = /** @type {(inputs: Auth_Reset_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les liens de réinitialisation ne servent qu’une fois et expirent au bout de 60 minutes. Demandez-en un nouveau.`)
};

const it_auth_reset_invalid_text = /** @type {(inputs: Auth_Reset_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I link di reimpostazione valgono una volta e scadono dopo 60 minuti. Richiedine uno nuovo.`)
};

const nl_auth_reset_invalid_text = /** @type {(inputs: Auth_Reset_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herstellinks werken één keer en verlopen na 60 minuten. Vraag een nieuwe aan.`)
};

const pl_auth_reset_invalid_text = /** @type {(inputs: Auth_Reset_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Linki do resetu działają raz i wygasają po 60 minutach. Poproś o nowy.`)
};

const pt_auth_reset_invalid_text = /** @type {(inputs: Auth_Reset_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os links de redefinição funcionam uma vez e expiram em 60 minutos. Peça um novo.`)
};

const ru_auth_reset_invalid_text = /** @type {(inputs: Auth_Reset_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ссылки для сброса действуют один раз и истекают через 60 минут. Запросите новую.`)
};

const sv_auth_reset_invalid_text = /** @type {(inputs: Auth_Reset_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Återställningslänkar fungerar en gång och går ut efter 60 minuter. Be om en ny.`)
};

const tr_auth_reset_invalid_text = /** @type {(inputs: Auth_Reset_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sıfırlama bağlantıları bir kez çalışır ve 60 dakika sonra geçersiz olur. Yenisini iste.`)
};

const zh_auth_reset_invalid_text = /** @type {(inputs: Auth_Reset_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重置链接只能使用一次，60 分钟后失效。请重新申请。`)
};

const ja_auth_reset_invalid_text = /** @type {(inputs: Auth_Reset_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再設定リンクは 1 回だけ使え、60 分で期限切れになります。新しいリンクをリクエストしてください。`)
};

/**
* | output |
* | --- |
* | "Reset links work once and expire after 60 minutes. Ask for a new one." |
*
* @param {Auth_Reset_Invalid_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_reset_invalid_text = /** @type {((inputs?: Auth_Reset_Invalid_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Reset_Invalid_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_reset_invalid_text(inputs)
	if (locale === "de") return de_auth_reset_invalid_text(inputs)
	if (locale === "fr") return fr_auth_reset_invalid_text(inputs)
	if (locale === "it") return it_auth_reset_invalid_text(inputs)
	if (locale === "nl") return nl_auth_reset_invalid_text(inputs)
	if (locale === "pl") return pl_auth_reset_invalid_text(inputs)
	if (locale === "pt") return pt_auth_reset_invalid_text(inputs)
	if (locale === "ru") return ru_auth_reset_invalid_text(inputs)
	if (locale === "sv") return sv_auth_reset_invalid_text(inputs)
	if (locale === "tr") return tr_auth_reset_invalid_text(inputs)
	if (locale === "zh") return zh_auth_reset_invalid_text(inputs)
	if (locale === "ja") return ja_auth_reset_invalid_text(inputs)
	return en_auth_reset_invalid_text(inputs)
});
