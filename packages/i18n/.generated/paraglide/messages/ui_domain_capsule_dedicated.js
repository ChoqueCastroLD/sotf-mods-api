/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Capsule_DedicatedInputs */

const en_ui_domain_capsule_dedicated = /** @type {(inputs: Ui_Domain_Capsule_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dedicated server`)
};

const es_ui_domain_capsule_dedicated = /** @type {(inputs: Ui_Domain_Capsule_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Servidor dedicado`)
};

const de_ui_domain_capsule_dedicated = /** @type {(inputs: Ui_Domain_Capsule_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dedizierter Server`)
};

const fr_ui_domain_capsule_dedicated = /** @type {(inputs: Ui_Domain_Capsule_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serveur dédié`)
};

const it_ui_domain_capsule_dedicated = /** @type {(inputs: Ui_Domain_Capsule_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Server dedicato`)
};

const nl_ui_domain_capsule_dedicated = /** @type {(inputs: Ui_Domain_Capsule_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dedicated server`)
};

const pl_ui_domain_capsule_dedicated = /** @type {(inputs: Ui_Domain_Capsule_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serwer dedykowany`)
};

const pt_ui_domain_capsule_dedicated = /** @type {(inputs: Ui_Domain_Capsule_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Servidor dedicado`)
};

const ru_ui_domain_capsule_dedicated = /** @type {(inputs: Ui_Domain_Capsule_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выделенный сервер`)
};

const sv_ui_domain_capsule_dedicated = /** @type {(inputs: Ui_Domain_Capsule_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dedikerad server`)
};

const tr_ui_domain_capsule_dedicated = /** @type {(inputs: Ui_Domain_Capsule_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Özel sunucu`)
};

const zh_ui_domain_capsule_dedicated = /** @type {(inputs: Ui_Domain_Capsule_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`专用服务器`)
};

const ja_ui_domain_capsule_dedicated = /** @type {(inputs: Ui_Domain_Capsule_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`専用サーバー`)
};

/**
* | output |
* | --- |
* | "Dedicated server" |
*
* @param {Ui_Domain_Capsule_DedicatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_capsule_dedicated = /** @type {((inputs?: Ui_Domain_Capsule_DedicatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Capsule_DedicatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_capsule_dedicated(inputs)
	if (locale === "de") return de_ui_domain_capsule_dedicated(inputs)
	if (locale === "fr") return fr_ui_domain_capsule_dedicated(inputs)
	if (locale === "it") return it_ui_domain_capsule_dedicated(inputs)
	if (locale === "nl") return nl_ui_domain_capsule_dedicated(inputs)
	if (locale === "pl") return pl_ui_domain_capsule_dedicated(inputs)
	if (locale === "pt") return pt_ui_domain_capsule_dedicated(inputs)
	if (locale === "ru") return ru_ui_domain_capsule_dedicated(inputs)
	if (locale === "sv") return sv_ui_domain_capsule_dedicated(inputs)
	if (locale === "tr") return tr_ui_domain_capsule_dedicated(inputs)
	if (locale === "zh") return zh_ui_domain_capsule_dedicated(inputs)
	if (locale === "ja") return ja_ui_domain_capsule_dedicated(inputs)
	return en_ui_domain_capsule_dedicated(inputs)
});
