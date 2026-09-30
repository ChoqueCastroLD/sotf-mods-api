/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Content_Dev_Link_Legacy_TextInputs */

const en_content_dev_link_legacy_text = /** @type {(inputs: Content_Dev_Link_Legacy_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Still served; frozen routes sunset on ${i?.date}.`)
};

const es_content_dev_link_legacy_text = /** @type {(inputs: Content_Dev_Link_Legacy_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sigue en servicio; las rutas congeladas se retiran el ${i?.date}.`)
};

const de_content_dev_link_legacy_text = /** @type {(inputs: Content_Dev_Link_Legacy_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Weiter in Betrieb; eingefrorene Routen enden am ${i?.date}.`)
};

const fr_content_dev_link_legacy_text = /** @type {(inputs: Content_Dev_Link_Legacy_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Toujours en service ; les routes gelées s’arrêtent le ${i?.date}.`)
};

const it_content_dev_link_legacy_text = /** @type {(inputs: Content_Dev_Link_Legacy_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ancora attiva; le rotte congelate vengono ritirate il ${i?.date}.`)
};

const nl_content_dev_link_legacy_text = /** @type {(inputs: Content_Dev_Link_Legacy_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nog in gebruik; bevroren routes stoppen op ${i?.date}.`)
};

const pl_content_dev_link_legacy_text = /** @type {(inputs: Content_Dev_Link_Legacy_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nadal działa; zamrożone trasy zostaną wyłączone ${i?.date}.`)
};

const pt_content_dev_link_legacy_text = /** @type {(inputs: Content_Dev_Link_Legacy_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ainda no ar; as rotas congeladas serão desativadas em ${i?.date}.`)
};

const ru_content_dev_link_legacy_text = /** @type {(inputs: Content_Dev_Link_Legacy_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Всё ещё работает; замороженные маршруты отключатся ${i?.date}.`)
};

const sv_content_dev_link_legacy_text = /** @type {(inputs: Content_Dev_Link_Legacy_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fortfarande i drift; frysta rutter stängs ${i?.date}.`)
};

const tr_content_dev_link_legacy_text = /** @type {(inputs: Content_Dev_Link_Legacy_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hâlâ hizmette; dondurulmuş rotalar ${i?.date} tarihinde kapanacak.`)
};

const zh_content_dev_link_legacy_text = /** @type {(inputs: Content_Dev_Link_Legacy_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`仍在服务；冻结的路由将于 ${i?.date} 停用。`)
};

const ja_content_dev_link_legacy_text = /** @type {(inputs: Content_Dev_Link_Legacy_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`引き続き稼働中。凍結ルートは ${i?.date} に終了します。`)
};

/**
* | output |
* | --- |
* | "Still served; frozen routes sunset on {date}." |
*
* @param {Content_Dev_Link_Legacy_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_dev_link_legacy_text = /** @type {((inputs: Content_Dev_Link_Legacy_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Link_Legacy_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_dev_link_legacy_text(inputs)
	if (locale === "de") return de_content_dev_link_legacy_text(inputs)
	if (locale === "fr") return fr_content_dev_link_legacy_text(inputs)
	if (locale === "it") return it_content_dev_link_legacy_text(inputs)
	if (locale === "nl") return nl_content_dev_link_legacy_text(inputs)
	if (locale === "pl") return pl_content_dev_link_legacy_text(inputs)
	if (locale === "pt") return pt_content_dev_link_legacy_text(inputs)
	if (locale === "ru") return ru_content_dev_link_legacy_text(inputs)
	if (locale === "sv") return sv_content_dev_link_legacy_text(inputs)
	if (locale === "tr") return tr_content_dev_link_legacy_text(inputs)
	if (locale === "zh") return zh_content_dev_link_legacy_text(inputs)
	if (locale === "ja") return ja_content_dev_link_legacy_text(inputs)
	return en_content_dev_link_legacy_text(inputs)
});
