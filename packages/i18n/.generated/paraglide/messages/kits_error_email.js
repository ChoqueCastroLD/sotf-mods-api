/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Error_EmailInputs */

const en_kits_error_email = /** @type {(inputs: Kits_Error_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verify your email address to create and edit kits.`)
};

const es_kits_error_email = /** @type {(inputs: Kits_Error_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica tu correo electrónico para crear y editar kits.`)
};

const de_kits_error_email = /** @type {(inputs: Kits_Error_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestätige deine E-Mail-Adresse, um Kits zu erstellen und zu bearbeiten.`)
};

const fr_kits_error_email = /** @type {(inputs: Kits_Error_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérifiez votre adresse e-mail pour créer et modifier des kits.`)
};

const it_kits_error_email = /** @type {(inputs: Kits_Error_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica il tuo indirizzo email per creare e modificare kit.`)
};

const nl_kits_error_email = /** @type {(inputs: Kits_Error_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bevestig je e-mailadres om kits te maken en te bewerken.`)
};

const pl_kits_error_email = /** @type {(inputs: Kits_Error_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Potwierdź adres e-mail, aby tworzyć i edytować zestawy.`)
};

const pt_kits_error_email = /** @type {(inputs: Kits_Error_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifique seu e-mail para criar e editar kits.`)
};

const ru_kits_error_email = /** @type {(inputs: Kits_Error_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подтвердите адрес электронной почты, чтобы создавать и редактировать наборы.`)
};

const sv_kits_error_email = /** @type {(inputs: Kits_Error_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifiera din e-postadress för att skapa och redigera kit.`)
};

const tr_kits_error_email = /** @type {(inputs: Kits_Error_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit oluşturmak ve düzenlemek için e-posta adresini doğrula.`)
};

const zh_kits_error_email = /** @type {(inputs: Kits_Error_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请先验证邮箱地址，才能创建和编辑套装。`)
};

const ja_kits_error_email = /** @type {(inputs: Kits_Error_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットの作成・編集にはメールアドレスの確認が必要です。`)
};

/**
* | output |
* | --- |
* | "Verify your email address to create and edit kits." |
*
* @param {Kits_Error_EmailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_error_email = /** @type {((inputs?: Kits_Error_EmailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Error_EmailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_error_email(inputs)
	if (locale === "de") return de_kits_error_email(inputs)
	if (locale === "fr") return fr_kits_error_email(inputs)
	if (locale === "it") return it_kits_error_email(inputs)
	if (locale === "nl") return nl_kits_error_email(inputs)
	if (locale === "pl") return pl_kits_error_email(inputs)
	if (locale === "pt") return pt_kits_error_email(inputs)
	if (locale === "ru") return ru_kits_error_email(inputs)
	if (locale === "sv") return sv_kits_error_email(inputs)
	if (locale === "tr") return tr_kits_error_email(inputs)
	if (locale === "zh") return zh_kits_error_email(inputs)
	if (locale === "ja") return ja_kits_error_email(inputs)
	return en_kits_error_email(inputs)
});
