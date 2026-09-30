/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Version_New_SinceInputs */

const en_ui_domain_version_new_since = /** @type {(inputs: Ui_Domain_Version_New_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New since your last download`)
};

const es_ui_domain_version_new_since = /** @type {(inputs: Ui_Domain_Version_New_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nueva desde tu última descarga`)
};

const de_ui_domain_version_new_since = /** @type {(inputs: Ui_Domain_Version_New_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neu seit deinem letzten Download`)
};

const fr_ui_domain_version_new_since = /** @type {(inputs: Ui_Domain_Version_New_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouvelle depuis votre dernier téléchargement`)
};

const it_ui_domain_version_new_since = /** @type {(inputs: Ui_Domain_Version_New_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuova dal tuo ultimo download`)
};

const nl_ui_domain_version_new_since = /** @type {(inputs: Ui_Domain_Version_New_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuw sinds je laatste download`)
};

const pl_ui_domain_version_new_since = /** @type {(inputs: Ui_Domain_Version_New_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowa od twojego ostatniego pobrania`)
};

const pt_ui_domain_version_new_since = /** @type {(inputs: Ui_Domain_Version_New_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nova desde o seu último download`)
};

const ru_ui_domain_version_new_since = /** @type {(inputs: Ui_Domain_Version_New_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новая с вашей последней загрузки`)
};

const sv_ui_domain_version_new_since = /** @type {(inputs: Ui_Domain_Version_New_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ny sedan din senaste nedladdning`)
};

const tr_ui_domain_version_new_since = /** @type {(inputs: Ui_Domain_Version_New_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Son indirmenden beri yeni`)
};

const zh_ui_domain_version_new_since = /** @type {(inputs: Ui_Domain_Version_New_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自你上次下载后的新版本`)
};

const ja_ui_domain_version_new_since = /** @type {(inputs: Ui_Domain_Version_New_SinceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前回のダウンロード以降の新バージョン`)
};

/**
* | output |
* | --- |
* | "New since your last download" |
*
* @param {Ui_Domain_Version_New_SinceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_version_new_since = /** @type {((inputs?: Ui_Domain_Version_New_SinceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Version_New_SinceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_version_new_since(inputs)
	if (locale === "de") return de_ui_domain_version_new_since(inputs)
	if (locale === "fr") return fr_ui_domain_version_new_since(inputs)
	if (locale === "it") return it_ui_domain_version_new_since(inputs)
	if (locale === "nl") return nl_ui_domain_version_new_since(inputs)
	if (locale === "pl") return pl_ui_domain_version_new_since(inputs)
	if (locale === "pt") return pt_ui_domain_version_new_since(inputs)
	if (locale === "ru") return ru_ui_domain_version_new_since(inputs)
	if (locale === "sv") return sv_ui_domain_version_new_since(inputs)
	if (locale === "tr") return tr_ui_domain_version_new_since(inputs)
	if (locale === "zh") return zh_ui_domain_version_new_since(inputs)
	if (locale === "ja") return ja_ui_domain_version_new_since(inputs)
	return en_ui_domain_version_new_since(inputs)
});
