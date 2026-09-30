/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ loader: NonNullable<unknown>, version: NonNullable<unknown>, status: NonNullable<unknown> }} Landing_Radar_LoaderInputs */

const en_landing_radar_loader = /** @type {(inputs: Landing_Radar_LoaderInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: works`);
	if (i?.status === "partial") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: partly works`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: broken`);
	return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: not tested yet`)
	
};

const es_landing_radar_loader = /** @type {(inputs: Landing_Radar_LoaderInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: funciona`);
	if (i?.status === "partial") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: funciona a medias`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: roto`);
	return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: aún sin probar`)
	
};

const de_landing_radar_loader = /** @type {(inputs: Landing_Radar_LoaderInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: funktioniert`);
	if (i?.status === "partial") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: funktioniert teilweise`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: kaputt`);
	return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: noch nicht getestet`)
	
};

const fr_landing_radar_loader = /** @type {(inputs: Landing_Radar_LoaderInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version} : fonctionne`);
	if (i?.status === "partial") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version} : fonctionne en partie`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version} : cassé`);
	return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version} : pas encore testé`)
	
};

const it_landing_radar_loader = /** @type {(inputs: Landing_Radar_LoaderInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: funziona`);
	if (i?.status === "partial") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: funziona in parte`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: non funziona`);
	return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: non ancora testato`)
	
};

const nl_landing_radar_loader = /** @type {(inputs: Landing_Radar_LoaderInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: werkt`);
	if (i?.status === "partial") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: werkt deels`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: kapot`);
	return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: nog niet getest`)
	
};

const pl_landing_radar_loader = /** @type {(inputs: Landing_Radar_LoaderInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: działa`);
	if (i?.status === "partial") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: działa częściowo`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: nie działa`);
	return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: jeszcze nie przetestowano`)
	
};

const pt_landing_radar_loader = /** @type {(inputs: Landing_Radar_LoaderInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: funciona`);
	if (i?.status === "partial") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: funciona em parte`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: quebrado`);
	return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: ainda não testado`)
	
};

const ru_landing_radar_loader = /** @type {(inputs: Landing_Radar_LoaderInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: работает`);
	if (i?.status === "partial") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: работает частично`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: не работает`);
	return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: ещё не проверен`)
	
};

const sv_landing_radar_loader = /** @type {(inputs: Landing_Radar_LoaderInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: fungerar`);
	if (i?.status === "partial") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: fungerar delvis`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: trasig`);
	return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: inte testad än`)
	
};

const tr_landing_radar_loader = /** @type {(inputs: Landing_Radar_LoaderInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: çalışıyor`);
	if (i?.status === "partial") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: kısmen çalışıyor`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: bozuk`);
	return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}: henüz test edilmedi`)
	
};

const zh_landing_radar_loader = /** @type {(inputs: Landing_Radar_LoaderInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}：可用`);
	if (i?.status === "partial") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}：部分可用`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}：不可用`);
	return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}：尚未测试`)
	
};

const ja_landing_radar_loader = /** @type {(inputs: Landing_Radar_LoaderInputs) => LocalizedString} */ (i) => {
	if (i?.status === "works") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}：動作`);
	if (i?.status === "partial") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}：一部動作`);
	if (i?.status === "broken") return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}：動作しない`);
	return /** @type {LocalizedString} */ (`${i?.loader} ${i?.version}：未テスト`)
	
};

/**
* | status | output |
* | --- | --- |
* | "works" | "{loader} {version}: works" |
* | "partial" | "{loader} {version}: partly works" |
* | "broken" | "{loader} {version}: broken" |
* | * | "{loader} {version}: not tested yet" |
*
* @param {Landing_Radar_LoaderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_radar_loader = /** @type {((inputs: Landing_Radar_LoaderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Radar_LoaderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_radar_loader(inputs)
	if (locale === "de") return de_landing_radar_loader(inputs)
	if (locale === "fr") return fr_landing_radar_loader(inputs)
	if (locale === "it") return it_landing_radar_loader(inputs)
	if (locale === "nl") return nl_landing_radar_loader(inputs)
	if (locale === "pl") return pl_landing_radar_loader(inputs)
	if (locale === "pt") return pt_landing_radar_loader(inputs)
	if (locale === "ru") return ru_landing_radar_loader(inputs)
	if (locale === "sv") return sv_landing_radar_loader(inputs)
	if (locale === "tr") return tr_landing_radar_loader(inputs)
	if (locale === "zh") return zh_landing_radar_loader(inputs)
	if (locale === "ja") return ja_landing_radar_loader(inputs)
	return en_landing_radar_loader(inputs)
});
