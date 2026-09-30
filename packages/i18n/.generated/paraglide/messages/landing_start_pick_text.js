/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Start_Pick_TextInputs */

const en_landing_start_pick_text = /** @type {(inputs: Landing_Start_Pick_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Browse the catalog, or grab a Kit of mods that already work together.`)
};

const es_landing_start_pick_text = /** @type {(inputs: Landing_Start_Pick_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explora el catálogo o llévate un Kit de mods que ya funcionan juntos.`)
};

const de_landing_start_pick_text = /** @type {(inputs: Landing_Start_Pick_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stöbere im Katalog oder nimm ein Kit mit Mods, die schon zusammen funktionieren.`)
};

const fr_landing_start_pick_text = /** @type {(inputs: Landing_Start_Pick_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parcourez le catalogue, ou prenez un Kit de mods qui fonctionnent déjà ensemble.`)
};

const it_landing_start_pick_text = /** @type {(inputs: Landing_Start_Pick_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sfoglia il catalogo o prendi un Kit di mod che funzionano già insieme.`)
};

const nl_landing_start_pick_text = /** @type {(inputs: Landing_Start_Pick_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blader door de catalogus of pak een Kit met mods die al samenwerken.`)
};

const pl_landing_start_pick_text = /** @type {(inputs: Landing_Start_Pick_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeglądaj katalog albo weź zestaw modów, które już działają razem.`)
};

const pt_landing_start_pick_text = /** @type {(inputs: Landing_Start_Pick_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explore o catálogo ou pegue um Kit de mods que já funcionam juntos.`)
};

const ru_landing_start_pick_text = /** @type {(inputs: Landing_Start_Pick_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Посмотрите каталог или возьмите набор модов, которые уже работают вместе.`)
};

const sv_landing_start_pick_text = /** @type {(inputs: Landing_Start_Pick_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bläddra i katalogen eller ta ett kit med moddar som redan fungerar ihop.`)
};

const tr_landing_start_pick_text = /** @type {(inputs: Landing_Start_Pick_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kataloğa göz at ya da birlikte çalıştığı bilinen modlardan oluşan bir kit al.`)
};

const zh_landing_start_pick_text = /** @type {(inputs: Landing_Start_Pick_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`浏览目录，或直接使用一套已确认能一起运行的模组套装。`)
};

const ja_landing_start_pick_text = /** @type {(inputs: Landing_Start_Pick_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カタログを見るか、一緒に動作するMODをまとめたキットを使いましょう。`)
};

/**
* | output |
* | --- |
* | "Browse the catalog, or grab a Kit of mods that already work together." |
*
* @param {Landing_Start_Pick_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_start_pick_text = /** @type {((inputs?: Landing_Start_Pick_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Start_Pick_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_start_pick_text(inputs)
	if (locale === "de") return de_landing_start_pick_text(inputs)
	if (locale === "fr") return fr_landing_start_pick_text(inputs)
	if (locale === "it") return it_landing_start_pick_text(inputs)
	if (locale === "nl") return nl_landing_start_pick_text(inputs)
	if (locale === "pl") return pl_landing_start_pick_text(inputs)
	if (locale === "pt") return pt_landing_start_pick_text(inputs)
	if (locale === "ru") return ru_landing_start_pick_text(inputs)
	if (locale === "sv") return sv_landing_start_pick_text(inputs)
	if (locale === "tr") return tr_landing_start_pick_text(inputs)
	if (locale === "zh") return zh_landing_start_pick_text(inputs)
	if (locale === "ja") return ja_landing_start_pick_text(inputs)
	return en_landing_start_pick_text(inputs)
});
