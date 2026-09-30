/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Deletion_Mode_KeepInputs */

const en_emails_auth_deletion_mode_keep = /** @type {(inputs: Emails_Auth_Deletion_Mode_KeepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your mods will stay published without your name.`)
};

const es_emails_auth_deletion_mode_keep = /** @type {(inputs: Emails_Auth_Deletion_Mode_KeepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tus mods seguirán publicados sin tu nombre.`)
};

const de_emails_auth_deletion_mode_keep = /** @type {(inputs: Emails_Auth_Deletion_Mode_KeepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Mods bleiben ohne deinen Namen veröffentlicht.`)
};

const fr_emails_auth_deletion_mode_keep = /** @type {(inputs: Emails_Auth_Deletion_Mode_KeepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vos mods resteront publiés sans votre nom.`)
};

const it_emails_auth_deletion_mode_keep = /** @type {(inputs: Emails_Auth_Deletion_Mode_KeepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le tue mod resteranno pubblicate senza il tuo nome.`)
};

const nl_emails_auth_deletion_mode_keep = /** @type {(inputs: Emails_Auth_Deletion_Mode_KeepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je mods blijven gepubliceerd zonder je naam.`)
};

const pl_emails_auth_deletion_mode_keep = /** @type {(inputs: Emails_Auth_Deletion_Mode_KeepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje mody pozostaną opublikowane bez Twojego imienia.`)
};

const pt_emails_auth_deletion_mode_keep = /** @type {(inputs: Emails_Auth_Deletion_Mode_KeepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seus mods continuarão publicados sem o seu nome.`)
};

const ru_emails_auth_deletion_mode_keep = /** @type {(inputs: Emails_Auth_Deletion_Mode_KeepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваши моды останутся опубликованными без вашего имени.`)
};

const sv_emails_auth_deletion_mode_keep = /** @type {(inputs: Emails_Auth_Deletion_Mode_KeepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dina moddar förblir publicerade utan ditt namn.`)
};

const tr_emails_auth_deletion_mode_keep = /** @type {(inputs: Emails_Auth_Deletion_Mode_KeepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modların adın olmadan yayında kalacak.`)
};

const zh_emails_auth_deletion_mode_keep = /** @type {(inputs: Emails_Auth_Deletion_Mode_KeepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的模组将继续公开，但不再显示你的名字。`)
};

const ja_emails_auth_deletion_mode_keep = /** @type {(inputs: Emails_Auth_Deletion_Mode_KeepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたの MOD は名前を表示せずに公開されたままになります。`)
};

/**
* | output |
* | --- |
* | "Your mods will stay published without your name." |
*
* @param {Emails_Auth_Deletion_Mode_KeepInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_deletion_mode_keep = /** @type {((inputs?: Emails_Auth_Deletion_Mode_KeepInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Deletion_Mode_KeepInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_deletion_mode_keep(inputs)
	if (locale === "de") return de_emails_auth_deletion_mode_keep(inputs)
	if (locale === "fr") return fr_emails_auth_deletion_mode_keep(inputs)
	if (locale === "it") return it_emails_auth_deletion_mode_keep(inputs)
	if (locale === "nl") return nl_emails_auth_deletion_mode_keep(inputs)
	if (locale === "pl") return pl_emails_auth_deletion_mode_keep(inputs)
	if (locale === "pt") return pt_emails_auth_deletion_mode_keep(inputs)
	if (locale === "ru") return ru_emails_auth_deletion_mode_keep(inputs)
	if (locale === "sv") return sv_emails_auth_deletion_mode_keep(inputs)
	if (locale === "tr") return tr_emails_auth_deletion_mode_keep(inputs)
	if (locale === "zh") return zh_emails_auth_deletion_mode_keep(inputs)
	if (locale === "ja") return ja_emails_auth_deletion_mode_keep(inputs)
	return en_emails_auth_deletion_mode_keep(inputs)
});
