/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Faq_Cost_AInputs */

const en_manager_faq_cost_a = /** @type {(inputs: Manager_Faq_Cost_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No. It is free and open source under the MIT license.`)
};

const es_manager_faq_cost_a = /** @type {(inputs: Manager_Faq_Cost_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No. Es gratis y de código abierto con licencia MIT.`)
};

const de_manager_faq_cost_a = /** @type {(inputs: Manager_Faq_Cost_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nein. Es ist kostenlos und Open Source unter der MIT-Lizenz.`)
};

const fr_manager_faq_cost_a = /** @type {(inputs: Manager_Faq_Cost_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non. C’est gratuit et open source sous licence MIT.`)
};

const it_manager_faq_cost_a = /** @type {(inputs: Manager_Faq_Cost_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No. È gratis e open source con licenza MIT.`)
};

const nl_manager_faq_cost_a = /** @type {(inputs: Manager_Faq_Cost_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nee. Het is gratis en open source onder de MIT-licentie.`)
};

const pl_manager_faq_cost_a = /** @type {(inputs: Manager_Faq_Cost_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie. Jest darmowy i open source na licencji MIT.`)
};

const pt_manager_faq_cost_a = /** @type {(inputs: Manager_Faq_Cost_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não. É gratuito e de código aberto sob a licença MIT.`)
};

const ru_manager_faq_cost_a = /** @type {(inputs: Manager_Faq_Cost_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет. Приложение бесплатное и с открытым кодом под лицензией MIT.`)
};

const sv_manager_faq_cost_a = /** @type {(inputs: Manager_Faq_Cost_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nej. Den är gratis och öppen källkod under MIT-licensen.`)
};

const tr_manager_faq_cost_a = /** @type {(inputs: Manager_Faq_Cost_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hayır. MIT lisansıyla ücretsiz ve açık kaynak.`)
};

const zh_manager_faq_cost_a = /** @type {(inputs: Manager_Faq_Cost_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不收费。它免费且开源，采用 MIT 许可证。`)
};

const ja_manager_faq_cost_a = /** @type {(inputs: Manager_Faq_Cost_AInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`かかりません。MIT ライセンスの無料オープンソースです。`)
};

/**
* | output |
* | --- |
* | "No. It is free and open source under the MIT license." |
*
* @param {Manager_Faq_Cost_AInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_faq_cost_a = /** @type {((inputs?: Manager_Faq_Cost_AInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Faq_Cost_AInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_faq_cost_a(inputs)
	if (locale === "de") return de_manager_faq_cost_a(inputs)
	if (locale === "fr") return fr_manager_faq_cost_a(inputs)
	if (locale === "it") return it_manager_faq_cost_a(inputs)
	if (locale === "nl") return nl_manager_faq_cost_a(inputs)
	if (locale === "pl") return pl_manager_faq_cost_a(inputs)
	if (locale === "pt") return pt_manager_faq_cost_a(inputs)
	if (locale === "ru") return ru_manager_faq_cost_a(inputs)
	if (locale === "sv") return sv_manager_faq_cost_a(inputs)
	if (locale === "tr") return tr_manager_faq_cost_a(inputs)
	if (locale === "zh") return zh_manager_faq_cost_a(inputs)
	if (locale === "ja") return ja_manager_faq_cost_a(inputs)
	return en_manager_faq_cost_a(inputs)
});
