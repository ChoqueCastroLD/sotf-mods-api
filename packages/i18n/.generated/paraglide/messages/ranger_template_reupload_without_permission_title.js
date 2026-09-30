/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Template_Reupload_Without_Permission_TitleInputs */

const en_ranger_template_reupload_without_permission_title = /** @type {(inputs: Ranger_Template_Reupload_Without_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reupload without permission`)
};

const es_ranger_template_reupload_without_permission_title = /** @type {(inputs: Ranger_Template_Reupload_Without_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resubida sin permiso`)
};

const de_ranger_template_reupload_without_permission_title = /** @type {(inputs: Ranger_Template_Reupload_Without_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reupload ohne Erlaubnis`)
};

const fr_ranger_template_reupload_without_permission_title = /** @type {(inputs: Ranger_Template_Reupload_Without_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Republication sans autorisation`)
};

const it_ranger_template_reupload_without_permission_title = /** @type {(inputs: Ranger_Template_Reupload_Without_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ricaricamento senza permesso`)
};

const nl_ranger_template_reupload_without_permission_title = /** @type {(inputs: Ranger_Template_Reupload_Without_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herupload zonder toestemming`)
};

const pl_ranger_template_reupload_without_permission_title = /** @type {(inputs: Ranger_Template_Reupload_Without_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ponowne wrzucenie bez zgody`)
};

const pt_ranger_template_reupload_without_permission_title = /** @type {(inputs: Ranger_Template_Reupload_Without_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reenvio sem permissão`)
};

const ru_ranger_template_reupload_without_permission_title = /** @type {(inputs: Ranger_Template_Reupload_Without_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перезалив без разрешения`)
};

const sv_ranger_template_reupload_without_permission_title = /** @type {(inputs: Ranger_Template_Reupload_Without_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omuppladdning utan tillstånd`)
};

const tr_ranger_template_reupload_without_permission_title = /** @type {(inputs: Ranger_Template_Reupload_Without_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İzinsiz yeniden yükleme`)
};

const zh_ranger_template_reupload_without_permission_title = /** @type {(inputs: Ranger_Template_Reupload_Without_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未经许可转载`)
};

const ja_ranger_template_reupload_without_permission_title = /** @type {(inputs: Ranger_Template_Reupload_Without_Permission_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`無断転載`)
};

/**
* | output |
* | --- |
* | "Reupload without permission" |
*
* @param {Ranger_Template_Reupload_Without_Permission_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_template_reupload_without_permission_title = /** @type {((inputs?: Ranger_Template_Reupload_Without_Permission_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Template_Reupload_Without_Permission_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_template_reupload_without_permission_title(inputs)
	if (locale === "de") return de_ranger_template_reupload_without_permission_title(inputs)
	if (locale === "fr") return fr_ranger_template_reupload_without_permission_title(inputs)
	if (locale === "it") return it_ranger_template_reupload_without_permission_title(inputs)
	if (locale === "nl") return nl_ranger_template_reupload_without_permission_title(inputs)
	if (locale === "pl") return pl_ranger_template_reupload_without_permission_title(inputs)
	if (locale === "pt") return pt_ranger_template_reupload_without_permission_title(inputs)
	if (locale === "ru") return ru_ranger_template_reupload_without_permission_title(inputs)
	if (locale === "sv") return sv_ranger_template_reupload_without_permission_title(inputs)
	if (locale === "tr") return tr_ranger_template_reupload_without_permission_title(inputs)
	if (locale === "zh") return zh_ranger_template_reupload_without_permission_title(inputs)
	if (locale === "ja") return ja_ranger_template_reupload_without_permission_title(inputs)
	return en_ranger_template_reupload_without_permission_title(inputs)
});
