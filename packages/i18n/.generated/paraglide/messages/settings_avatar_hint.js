/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Settings_Avatar_HintInputs */

const en_settings_avatar_hint = /** @type {(inputs: Settings_Avatar_HintInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("en", i?.max, {});return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF or GIF up to ${max__number} MB. You can crop it before it is saved.`)
};

const es_settings_avatar_hint = /** @type {(inputs: Settings_Avatar_HintInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("es", i?.max, {});return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF o GIF de hasta ${max__number} MB. Puedes recortarla antes de guardarla.`)
};

const de_settings_avatar_hint = /** @type {(inputs: Settings_Avatar_HintInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("de", i?.max, {});return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF oder GIF bis ${max__number} MB. Du kannst es vor dem Speichern zuschneiden.`)
};

const fr_settings_avatar_hint = /** @type {(inputs: Settings_Avatar_HintInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("fr", i?.max, {});return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF ou GIF jusqu’à ${max__number} Mo. Vous pouvez la recadrer avant l’enregistrement.`)
};

const it_settings_avatar_hint = /** @type {(inputs: Settings_Avatar_HintInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("it", i?.max, {});return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF o GIF fino a ${max__number} MB. Puoi ritagliarla prima di salvarla.`)
};

const nl_settings_avatar_hint = /** @type {(inputs: Settings_Avatar_HintInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("nl", i?.max, {});return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF of GIF tot ${max__number} MB. Je kunt hem bijsnijden voordat hij wordt opgeslagen.`)
};

const pl_settings_avatar_hint = /** @type {(inputs: Settings_Avatar_HintInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("pl", i?.max, {});return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF lub GIF do ${max__number} MB. Przed zapisaniem możesz je przyciąć.`)
};

const pt_settings_avatar_hint = /** @type {(inputs: Settings_Avatar_HintInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("pt", i?.max, {});return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF ou GIF de até ${max__number} MB. Você pode recortar antes de salvar.`)
};

const ru_settings_avatar_hint = /** @type {(inputs: Settings_Avatar_HintInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("ru", i?.max, {});return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF или GIF до ${max__number} МБ. Перед сохранением его можно обрезать.`)
};

const sv_settings_avatar_hint = /** @type {(inputs: Settings_Avatar_HintInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("sv", i?.max, {});return /** @type {LocalizedString} */ (`PNG, JPEG, WebP, AVIF eller GIF upp till ${max__number} MB. Du kan beskära det innan det sparas.`)
};

const tr_settings_avatar_hint = /** @type {(inputs: Settings_Avatar_HintInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("tr", i?.max, {});return /** @type {LocalizedString} */ (`${max__number} MB’a kadar PNG, JPEG, WebP, AVIF veya GIF. Kaydetmeden önce kırpabilirsin.`)
};

const zh_settings_avatar_hint = /** @type {(inputs: Settings_Avatar_HintInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("zh", i?.max, {});return /** @type {LocalizedString} */ (`PNG、JPEG、WebP、AVIF 或 GIF，最大 ${max__number} MB。保存前可以裁剪。`)
};

const ja_settings_avatar_hint = /** @type {(inputs: Settings_Avatar_HintInputs) => LocalizedString} */ (i) => {
	const max__number = registry.number("ja", i?.max, {});return /** @type {LocalizedString} */ (`${max__number} MB までの PNG、JPEG、WebP、AVIF、GIF。保存前にトリミングできます。`)
};

/**
* | output |
* | --- |
* | "PNG, JPEG, WebP, AVIF or GIF up to {max__number} MB. You can crop it before it is saved." |
*
* @param {Settings_Avatar_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_avatar_hint = /** @type {((inputs: Settings_Avatar_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Avatar_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_avatar_hint(inputs)
	if (locale === "de") return de_settings_avatar_hint(inputs)
	if (locale === "fr") return fr_settings_avatar_hint(inputs)
	if (locale === "it") return it_settings_avatar_hint(inputs)
	if (locale === "nl") return nl_settings_avatar_hint(inputs)
	if (locale === "pl") return pl_settings_avatar_hint(inputs)
	if (locale === "pt") return pt_settings_avatar_hint(inputs)
	if (locale === "ru") return ru_settings_avatar_hint(inputs)
	if (locale === "sv") return sv_settings_avatar_hint(inputs)
	if (locale === "tr") return tr_settings_avatar_hint(inputs)
	if (locale === "zh") return zh_settings_avatar_hint(inputs)
	if (locale === "ja") return ja_settings_avatar_hint(inputs)
	return en_settings_avatar_hint(inputs)
});
