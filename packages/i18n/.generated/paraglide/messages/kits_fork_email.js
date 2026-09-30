/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Fork_EmailInputs */

const en_kits_fork_email = /** @type {(inputs: Kits_Fork_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verify your email address to create kits.`)
};

const es_kits_fork_email = /** @type {(inputs: Kits_Fork_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica tu correo electrónico para crear kits.`)
};

const de_kits_fork_email = /** @type {(inputs: Kits_Fork_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestätige deine E-Mail-Adresse, um Kits zu erstellen.`)
};

const fr_kits_fork_email = /** @type {(inputs: Kits_Fork_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérifiez votre adresse e-mail pour créer des kits.`)
};

const it_kits_fork_email = /** @type {(inputs: Kits_Fork_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica il tuo indirizzo email per creare kit.`)
};

const nl_kits_fork_email = /** @type {(inputs: Kits_Fork_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bevestig je e-mailadres om kits te maken.`)
};

const pl_kits_fork_email = /** @type {(inputs: Kits_Fork_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Potwierdź adres e-mail, aby tworzyć zestawy.`)
};

const pt_kits_fork_email = /** @type {(inputs: Kits_Fork_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifique seu e-mail para criar kits.`)
};

const ru_kits_fork_email = /** @type {(inputs: Kits_Fork_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подтвердите адрес электронной почты, чтобы создавать наборы.`)
};

const sv_kits_fork_email = /** @type {(inputs: Kits_Fork_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifiera din e-postadress för att skapa kit.`)
};

const tr_kits_fork_email = /** @type {(inputs: Kits_Fork_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit oluşturmak için e-posta adresini doğrula.`)
};

const zh_kits_fork_email = /** @type {(inputs: Kits_Fork_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请先验证邮箱地址再创建套装。`)
};

const ja_kits_fork_email = /** @type {(inputs: Kits_Fork_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットを作成するにはメールアドレスを確認してください。`)
};

/**
* | output |
* | --- |
* | "Verify your email address to create kits." |
*
* @param {Kits_Fork_EmailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_fork_email = /** @type {((inputs?: Kits_Fork_EmailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Fork_EmailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_fork_email(inputs)
	if (locale === "de") return de_kits_fork_email(inputs)
	if (locale === "fr") return fr_kits_fork_email(inputs)
	if (locale === "it") return it_kits_fork_email(inputs)
	if (locale === "nl") return nl_kits_fork_email(inputs)
	if (locale === "pl") return pl_kits_fork_email(inputs)
	if (locale === "pt") return pt_kits_fork_email(inputs)
	if (locale === "ru") return ru_kits_fork_email(inputs)
	if (locale === "sv") return sv_kits_fork_email(inputs)
	if (locale === "tr") return tr_kits_fork_email(inputs)
	if (locale === "zh") return zh_kits_fork_email(inputs)
	if (locale === "ja") return ja_kits_fork_email(inputs)
	return en_kits_fork_email(inputs)
});
