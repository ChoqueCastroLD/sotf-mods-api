/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_RequirementsInputs */

const en_manager_requirements = /** @type {(inputs: Manager_RequirementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows 10 and 11 · Free and open source · Nothing to install`)
};

const es_manager_requirements = /** @type {(inputs: Manager_RequirementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows 10 y 11 · Gratis y de código abierto · Sin instalación`)
};

const de_manager_requirements = /** @type {(inputs: Manager_RequirementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows 10 und 11 · Kostenlos und Open Source · Keine Installation`)
};

const fr_manager_requirements = /** @type {(inputs: Manager_RequirementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows 10 et 11 · Gratuit et open source · Rien à installer`)
};

const it_manager_requirements = /** @type {(inputs: Manager_RequirementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows 10 e 11 · Gratis e open source · Niente da installare`)
};

const nl_manager_requirements = /** @type {(inputs: Manager_RequirementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows 10 en 11 · Gratis en open source · Niets te installeren`)
};

const pl_manager_requirements = /** @type {(inputs: Manager_RequirementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows 10 i 11 · Darmowy i open source · Bez instalacji`)
};

const pt_manager_requirements = /** @type {(inputs: Manager_RequirementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows 10 e 11 · Grátis e de código aberto · Nada para instalar`)
};

const ru_manager_requirements = /** @type {(inputs: Manager_RequirementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows 10 и 11 · Бесплатно и с открытым кодом · Без установки`)
};

const sv_manager_requirements = /** @type {(inputs: Manager_RequirementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows 10 och 11 · Gratis och öppen källkod · Inget att installera`)
};

const tr_manager_requirements = /** @type {(inputs: Manager_RequirementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows 10 ve 11 · Ücretsiz ve açık kaynak · Kurulum gerekmez`)
};

const zh_manager_requirements = /** @type {(inputs: Manager_RequirementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows 10 和 11 · 免费开源 · 无需安装`)
};

const ja_manager_requirements = /** @type {(inputs: Manager_RequirementsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows 10 / 11 · 無料・オープンソース · インストール不要`)
};

/**
* | output |
* | --- |
* | "Windows 10 and 11 · Free and open source · Nothing to install" |
*
* @param {Manager_RequirementsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_requirements = /** @type {((inputs?: Manager_RequirementsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_RequirementsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_requirements(inputs)
	if (locale === "de") return de_manager_requirements(inputs)
	if (locale === "fr") return fr_manager_requirements(inputs)
	if (locale === "it") return it_manager_requirements(inputs)
	if (locale === "nl") return nl_manager_requirements(inputs)
	if (locale === "pl") return pl_manager_requirements(inputs)
	if (locale === "pt") return pt_manager_requirements(inputs)
	if (locale === "ru") return ru_manager_requirements(inputs)
	if (locale === "sv") return sv_manager_requirements(inputs)
	if (locale === "tr") return tr_manager_requirements(inputs)
	if (locale === "zh") return zh_manager_requirements(inputs)
	if (locale === "ja") return ja_manager_requirements(inputs)
	return en_manager_requirements(inputs)
});
