/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Template_Reupload_Without_PermissionInputs */

const en_ranger_template_reupload_without_permission = /** @type {(inputs: Ranger_Template_Reupload_Without_PermissionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This looks like a reupload of someone else’s work without their permission.`)
};

const es_ranger_template_reupload_without_permission = /** @type {(inputs: Ranger_Template_Reupload_Without_PermissionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parece una resubida del trabajo de otra persona sin su permiso.`)
};

const de_ranger_template_reupload_without_permission = /** @type {(inputs: Ranger_Template_Reupload_Without_PermissionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das sieht nach einem Reupload fremder Arbeit ohne Erlaubnis aus.`)
};

const fr_ranger_template_reupload_without_permission = /** @type {(inputs: Ranger_Template_Reupload_Without_PermissionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cela ressemble à une republication du travail de quelqu’un d’autre sans son autorisation.`)
};

const it_ranger_template_reupload_without_permission = /** @type {(inputs: Ranger_Template_Reupload_Without_PermissionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sembra un ricaricamento del lavoro di qualcun altro senza il suo permesso.`)
};

const nl_ranger_template_reupload_without_permission = /** @type {(inputs: Ranger_Template_Reupload_Without_PermissionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit lijkt een herupload van andermans werk zonder toestemming.`)
};

const pl_ranger_template_reupload_without_permission = /** @type {(inputs: Ranger_Template_Reupload_Without_PermissionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To wygląda na ponowne wrzucenie cudzej pracy bez zgody autora.`)
};

const pt_ranger_template_reupload_without_permission = /** @type {(inputs: Ranger_Template_Reupload_Without_PermissionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parece um reenvio do trabalho de outra pessoa sem a permissão dela.`)
};

const ru_ranger_template_reupload_without_permission = /** @type {(inputs: Ranger_Template_Reupload_Without_PermissionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Похоже на перезалив чужой работы без разрешения автора.`)
};

const sv_ranger_template_reupload_without_permission = /** @type {(inputs: Ranger_Template_Reupload_Without_PermissionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det här ser ut som en omuppladdning av någon annans verk utan tillstånd.`)
};

const tr_ranger_template_reupload_without_permission = /** @type {(inputs: Ranger_Template_Reupload_Without_PermissionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu, başkasının çalışmasının izinsiz yeniden yüklenmesine benziyor.`)
};

const zh_ranger_template_reupload_without_permission = /** @type {(inputs: Ranger_Template_Reupload_Without_PermissionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这看起来是未经许可转载他人的作品。`)
};

const ja_ranger_template_reupload_without_permission = /** @type {(inputs: Ranger_Template_Reupload_Without_PermissionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`他人の作品を許可なく再アップロードしたもののようです。`)
};

/**
* | output |
* | --- |
* | "This looks like a reupload of someone else’s work without their permission." |
*
* @param {Ranger_Template_Reupload_Without_PermissionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_template_reupload_without_permission = /** @type {((inputs?: Ranger_Template_Reupload_Without_PermissionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Template_Reupload_Without_PermissionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_template_reupload_without_permission(inputs)
	if (locale === "de") return de_ranger_template_reupload_without_permission(inputs)
	if (locale === "fr") return fr_ranger_template_reupload_without_permission(inputs)
	if (locale === "it") return it_ranger_template_reupload_without_permission(inputs)
	if (locale === "nl") return nl_ranger_template_reupload_without_permission(inputs)
	if (locale === "pl") return pl_ranger_template_reupload_without_permission(inputs)
	if (locale === "pt") return pt_ranger_template_reupload_without_permission(inputs)
	if (locale === "ru") return ru_ranger_template_reupload_without_permission(inputs)
	if (locale === "sv") return sv_ranger_template_reupload_without_permission(inputs)
	if (locale === "tr") return tr_ranger_template_reupload_without_permission(inputs)
	if (locale === "zh") return zh_ranger_template_reupload_without_permission(inputs)
	if (locale === "ja") return ja_ranger_template_reupload_without_permission(inputs)
	return en_ranger_template_reupload_without_permission(inputs)
});
