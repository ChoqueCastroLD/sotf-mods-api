/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Comment_PinnedInputs */

const en_ui_domain_comment_pinned = /** @type {(inputs: Ui_Domain_Comment_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pinned`)
};

const es_ui_domain_comment_pinned = /** @type {(inputs: Ui_Domain_Comment_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fijados`)
};

const de_ui_domain_comment_pinned = /** @type {(inputs: Ui_Domain_Comment_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Angepinnt`)
};

const fr_ui_domain_comment_pinned = /** @type {(inputs: Ui_Domain_Comment_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Épinglés`)
};

const it_ui_domain_comment_pinned = /** @type {(inputs: Ui_Domain_Comment_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In evidenza`)
};

const nl_ui_domain_comment_pinned = /** @type {(inputs: Ui_Domain_Comment_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vastgezet`)
};

const pl_ui_domain_comment_pinned = /** @type {(inputs: Ui_Domain_Comment_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przypięte`)
};

const pt_ui_domain_comment_pinned = /** @type {(inputs: Ui_Domain_Comment_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fixados`)
};

const ru_ui_domain_comment_pinned = /** @type {(inputs: Ui_Domain_Comment_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Закреплённые`)
};

const sv_ui_domain_comment_pinned = /** @type {(inputs: Ui_Domain_Comment_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fästa`)
};

const tr_ui_domain_comment_pinned = /** @type {(inputs: Ui_Domain_Comment_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sabitlenenler`)
};

const zh_ui_domain_comment_pinned = /** @type {(inputs: Ui_Domain_Comment_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`置顶`)
};

const ja_ui_domain_comment_pinned = /** @type {(inputs: Ui_Domain_Comment_PinnedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ピン留め`)
};

/**
* | output |
* | --- |
* | "Pinned" |
*
* @param {Ui_Domain_Comment_PinnedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_comment_pinned = /** @type {((inputs?: Ui_Domain_Comment_PinnedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Comment_PinnedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_comment_pinned(inputs)
	if (locale === "de") return de_ui_domain_comment_pinned(inputs)
	if (locale === "fr") return fr_ui_domain_comment_pinned(inputs)
	if (locale === "it") return it_ui_domain_comment_pinned(inputs)
	if (locale === "nl") return nl_ui_domain_comment_pinned(inputs)
	if (locale === "pl") return pl_ui_domain_comment_pinned(inputs)
	if (locale === "pt") return pt_ui_domain_comment_pinned(inputs)
	if (locale === "ru") return ru_ui_domain_comment_pinned(inputs)
	if (locale === "sv") return sv_ui_domain_comment_pinned(inputs)
	if (locale === "tr") return tr_ui_domain_comment_pinned(inputs)
	if (locale === "zh") return zh_ui_domain_comment_pinned(inputs)
	if (locale === "ja") return ja_ui_domain_comment_pinned(inputs)
	return en_ui_domain_comment_pinned(inputs)
});
