/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Mod_Video_PlayInputs */

const en_mod_video_play = /** @type {(inputs: Mod_Video_PlayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Play the trailer of ${i?.name}`)
};

const es_mod_video_play = /** @type {(inputs: Mod_Video_PlayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reproducir el tráiler de ${i?.name}`)
};

const de_mod_video_play = /** @type {(inputs: Mod_Video_PlayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Trailer von ${i?.name} abspielen`)
};

const fr_mod_video_play = /** @type {(inputs: Mod_Video_PlayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Lire la bande-annonce de ${i?.name}`)
};

const it_mod_video_play = /** @type {(inputs: Mod_Video_PlayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Riproduci il trailer di ${i?.name}`)
};

const nl_mod_video_play = /** @type {(inputs: Mod_Video_PlayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Speel de trailer van ${i?.name} af`)
};

const pl_mod_video_play = /** @type {(inputs: Mod_Video_PlayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Odtwórz zwiastun ${i?.name}`)
};

const pt_mod_video_play = /** @type {(inputs: Mod_Video_PlayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reproduzir o trailer de ${i?.name}`)
};

const ru_mod_video_play = /** @type {(inputs: Mod_Video_PlayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Смотреть трейлер ${i?.name}`)
};

const sv_mod_video_play = /** @type {(inputs: Mod_Video_PlayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Spela upp trailern för ${i?.name}`)
};

const tr_mod_video_play = /** @type {(inputs: Mod_Video_PlayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} fragmanını oynat`)
};

const zh_mod_video_play = /** @type {(inputs: Mod_Video_PlayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`播放 ${i?.name} 预告片`)
};

const ja_mod_video_play = /** @type {(inputs: Mod_Video_PlayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} のトレーラーを再生`)
};

/**
* | output |
* | --- |
* | "Play the trailer of {name}" |
*
* @param {Mod_Video_PlayInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_video_play = /** @type {((inputs: Mod_Video_PlayInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Video_PlayInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_video_play(inputs)
	if (locale === "de") return de_mod_video_play(inputs)
	if (locale === "fr") return fr_mod_video_play(inputs)
	if (locale === "it") return it_mod_video_play(inputs)
	if (locale === "nl") return nl_mod_video_play(inputs)
	if (locale === "pl") return pl_mod_video_play(inputs)
	if (locale === "pt") return pt_mod_video_play(inputs)
	if (locale === "ru") return ru_mod_video_play(inputs)
	if (locale === "sv") return sv_mod_video_play(inputs)
	if (locale === "tr") return tr_mod_video_play(inputs)
	if (locale === "zh") return zh_mod_video_play(inputs)
	if (locale === "ja") return ja_mod_video_play(inputs)
	return en_mod_video_play(inputs)
});
