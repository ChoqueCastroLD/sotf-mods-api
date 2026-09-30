/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ index: NonNullable<unknown>, total: NonNullable<unknown> }} Ui_Domain_Gallery_ImageInputs */

const en_ui_domain_gallery_image = /** @type {(inputs: Ui_Domain_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("en", i?.index, {});
	const total__number = registry.number("en", i?.total, {});return /** @type {LocalizedString} */ (`Screenshot ${index__number} of ${total__number}`)
};

const es_ui_domain_gallery_image = /** @type {(inputs: Ui_Domain_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("es", i?.index, {});
	const total__number = registry.number("es", i?.total, {});return /** @type {LocalizedString} */ (`Captura ${index__number} de ${total__number}`)
};

const de_ui_domain_gallery_image = /** @type {(inputs: Ui_Domain_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("de", i?.index, {});
	const total__number = registry.number("de", i?.total, {});return /** @type {LocalizedString} */ (`Screenshot ${index__number} von ${total__number}`)
};

const fr_ui_domain_gallery_image = /** @type {(inputs: Ui_Domain_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("fr", i?.index, {});
	const total__number = registry.number("fr", i?.total, {});return /** @type {LocalizedString} */ (`Capture ${index__number} sur ${total__number}`)
};

const it_ui_domain_gallery_image = /** @type {(inputs: Ui_Domain_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("it", i?.index, {});
	const total__number = registry.number("it", i?.total, {});return /** @type {LocalizedString} */ (`Screenshot ${index__number} di ${total__number}`)
};

const nl_ui_domain_gallery_image = /** @type {(inputs: Ui_Domain_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("nl", i?.index, {});
	const total__number = registry.number("nl", i?.total, {});return /** @type {LocalizedString} */ (`Screenshot ${index__number} van ${total__number}`)
};

const pl_ui_domain_gallery_image = /** @type {(inputs: Ui_Domain_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("pl", i?.index, {});
	const total__number = registry.number("pl", i?.total, {});return /** @type {LocalizedString} */ (`Zrzut ekranu ${index__number} z ${total__number}`)
};

const pt_ui_domain_gallery_image = /** @type {(inputs: Ui_Domain_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("pt", i?.index, {});
	const total__number = registry.number("pt", i?.total, {});return /** @type {LocalizedString} */ (`Captura ${index__number} de ${total__number}`)
};

const ru_ui_domain_gallery_image = /** @type {(inputs: Ui_Domain_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("ru", i?.index, {});
	const total__number = registry.number("ru", i?.total, {});return /** @type {LocalizedString} */ (`Скриншот ${index__number} из ${total__number}`)
};

const sv_ui_domain_gallery_image = /** @type {(inputs: Ui_Domain_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("sv", i?.index, {});
	const total__number = registry.number("sv", i?.total, {});return /** @type {LocalizedString} */ (`Skärmbild ${index__number} av ${total__number}`)
};

const tr_ui_domain_gallery_image = /** @type {(inputs: Ui_Domain_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("tr", i?.index, {});
	const total__number = registry.number("tr", i?.total, {});return /** @type {LocalizedString} */ (`Ekran görüntüsü ${index__number}/${total__number}`)
};

const zh_ui_domain_gallery_image = /** @type {(inputs: Ui_Domain_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("zh", i?.index, {});
	const total__number = registry.number("zh", i?.total, {});return /** @type {LocalizedString} */ (`截图 ${index__number} / ${total__number}`)
};

const ja_ui_domain_gallery_image = /** @type {(inputs: Ui_Domain_Gallery_ImageInputs) => LocalizedString} */ (i) => {
	const index__number = registry.number("ja", i?.index, {});
	const total__number = registry.number("ja", i?.total, {});return /** @type {LocalizedString} */ (`スクリーンショット ${index__number} / ${total__number}`)
};

/**
* | output |
* | --- |
* | "Screenshot {index__number} of {total__number}" |
*
* @param {Ui_Domain_Gallery_ImageInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_gallery_image = /** @type {((inputs: Ui_Domain_Gallery_ImageInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Gallery_ImageInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_gallery_image(inputs)
	if (locale === "de") return de_ui_domain_gallery_image(inputs)
	if (locale === "fr") return fr_ui_domain_gallery_image(inputs)
	if (locale === "it") return it_ui_domain_gallery_image(inputs)
	if (locale === "nl") return nl_ui_domain_gallery_image(inputs)
	if (locale === "pl") return pl_ui_domain_gallery_image(inputs)
	if (locale === "pt") return pt_ui_domain_gallery_image(inputs)
	if (locale === "ru") return ru_ui_domain_gallery_image(inputs)
	if (locale === "sv") return sv_ui_domain_gallery_image(inputs)
	if (locale === "tr") return tr_ui_domain_gallery_image(inputs)
	if (locale === "zh") return zh_ui_domain_gallery_image(inputs)
	if (locale === "ja") return ja_ui_domain_gallery_image(inputs)
	return en_ui_domain_gallery_image(inputs)
});
