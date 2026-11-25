/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Api_Can_PublishInputs */

const en_api_can_publish = /** @type {(inputs: Api_Can_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish new versions of your mods`)
};

const es_api_can_publish = /** @type {(inputs: Api_Can_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar nuevas versiones de tus mods`)
};

const de_api_can_publish = /** @type {(inputs: Api_Can_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue Versionen deiner Mods veröffentlichen`)
};

const fr_api_can_publish = /** @type {(inputs: Api_Can_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publier de nouvelles versions de vos mods`)
};

const it_api_can_publish = /** @type {(inputs: Api_Can_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblicare nuove versioni delle tue mod`)
};

const nl_api_can_publish = /** @type {(inputs: Api_Can_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe versies van je mods publiceren`)
};

const pl_api_can_publish = /** @type {(inputs: Api_Can_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publikować nowe wersje swoich modów`)
};

const pt_api_can_publish = /** @type {(inputs: Api_Can_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar novas versões dos seus mods`)
};

const ru_api_can_publish = /** @type {(inputs: Api_Can_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Публиковать новые версии модов`)
};

const sv_api_can_publish = /** @type {(inputs: Api_Can_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicera nya versioner av dina moddar`)
};

const tr_api_can_publish = /** @type {(inputs: Api_Can_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlarının yeni sürümlerini yayınla`)
};

const zh_api_can_publish = /** @type {(inputs: Api_Can_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布模组的新版本`)
};

const ja_api_can_publish = /** @type {(inputs: Api_Can_PublishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod の新しいバージョンを公開`)
};

/**
* | output |
* | --- |
* | "Publish new versions of your mods" |
*
* @param {Api_Can_PublishInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const api_can_publish = /** @type {((inputs?: Api_Can_PublishInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Api_Can_PublishInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_api_can_publish(inputs)
	if (locale === "de") return de_api_can_publish(inputs)
	if (locale === "fr") return fr_api_can_publish(inputs)
	if (locale === "it") return it_api_can_publish(inputs)
	if (locale === "nl") return nl_api_can_publish(inputs)
	if (locale === "pl") return pl_api_can_publish(inputs)
	if (locale === "pt") return pt_api_can_publish(inputs)
	if (locale === "ru") return ru_api_can_publish(inputs)
	if (locale === "sv") return sv_api_can_publish(inputs)
	if (locale === "tr") return tr_api_can_publish(inputs)
	if (locale === "zh") return zh_api_can_publish(inputs)
	if (locale === "ja") return ja_api_can_publish(inputs)
	return en_api_can_publish(inputs)
});
