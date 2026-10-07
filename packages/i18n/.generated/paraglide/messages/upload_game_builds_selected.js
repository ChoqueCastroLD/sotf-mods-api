/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Upload_Game_Builds_SelectedInputs */

const en_upload_game_builds_selected = /** @type {(inputs: Upload_Game_Builds_SelectedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("en", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Nothing selected`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} build selected`);
	return /** @type {LocalizedString} */ (`${count__number} builds selected`)
	
};

const es_upload_game_builds_selected = /** @type {(inputs: Upload_Game_Builds_SelectedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("es", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Nada seleccionado`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} build seleccionada`);
	return /** @type {LocalizedString} */ (`${count__number} builds seleccionadas`)
	
};

const de_upload_game_builds_selected = /** @type {(inputs: Upload_Game_Builds_SelectedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("de", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Nichts ausgewählt`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Build ausgewählt`);
	return /** @type {LocalizedString} */ (`${count__number} Builds ausgewählt`)
	
};

const fr_upload_game_builds_selected = /** @type {(inputs: Upload_Game_Builds_SelectedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("fr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Aucune sélection`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} build sélectionné`);
	return /** @type {LocalizedString} */ (`${count__number} builds sélectionnés`)
	
};

const it_upload_game_builds_selected = /** @type {(inputs: Upload_Game_Builds_SelectedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("it", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Nessuna selezione`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} build selezionata`);
	return /** @type {LocalizedString} */ (`${count__number} build selezionate`)
	
};

const nl_upload_game_builds_selected = /** @type {(inputs: Upload_Game_Builds_SelectedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("nl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Niets geselecteerd`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} build geselecteerd`);
	return /** @type {LocalizedString} */ (`${count__number} builds geselecteerd`)
	
};

const pl_upload_game_builds_selected = /** @type {(inputs: Upload_Game_Builds_SelectedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Nic nie wybrano`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Wybrano ${count__number} build`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Wybrano ${count__number} buildy`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Wybrano ${count__number} buildów`);
	return /** @type {LocalizedString} */ (`Wybrano ${count__number} buildów`)
	
};

const pt_upload_game_builds_selected = /** @type {(inputs: Upload_Game_Builds_SelectedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pt", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Nada selecionado`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} build selecionada`);
	return /** @type {LocalizedString} */ (`${count__number} builds selecionadas`)
	
};

const ru_upload_game_builds_selected = /** @type {(inputs: Upload_Game_Builds_SelectedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ru", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Ничего не выбрано`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Выбрана ${count__number} сборка`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Выбрано ${count__number} сборки`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Выбрано ${count__number} сборок`);
	return /** @type {LocalizedString} */ (`Выбрано ${count__number} сборки`)
	
};

const sv_upload_game_builds_selected = /** @type {(inputs: Upload_Game_Builds_SelectedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("sv", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Inget valt`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} version vald`);
	return /** @type {LocalizedString} */ (`${count__number} versioner valda`)
	
};

const tr_upload_game_builds_selected = /** @type {(inputs: Upload_Game_Builds_SelectedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("tr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Hiçbiri seçilmedi`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} sürüm seçildi`);
	return /** @type {LocalizedString} */ (`${count__number} sürüm seçildi`)
	
};

const zh_upload_game_builds_selected = /** @type {(inputs: Upload_Game_Builds_SelectedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("zh", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`未选择`);
	return /** @type {LocalizedString} */ (`已选择 ${count__number} 个版本`)
	
};

const ja_upload_game_builds_selected = /** @type {(inputs: Upload_Game_Builds_SelectedInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ja", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`未選択`);
	return /** @type {LocalizedString} */ (`${count__number}件のビルドを選択中`)
	
};

/**
* | count__exact | count__plural | output |
* | --- | --- | --- |
* | "0" | * | "Nothing selected" |
* | * | "one" | "{count__number} build selected" |
* | * | * | "{count__number} builds selected" |
*
* @param {Upload_Game_Builds_SelectedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_game_builds_selected = /** @type {((inputs: Upload_Game_Builds_SelectedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Game_Builds_SelectedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_game_builds_selected(inputs)
	if (locale === "de") return de_upload_game_builds_selected(inputs)
	if (locale === "fr") return fr_upload_game_builds_selected(inputs)
	if (locale === "it") return it_upload_game_builds_selected(inputs)
	if (locale === "nl") return nl_upload_game_builds_selected(inputs)
	if (locale === "pl") return pl_upload_game_builds_selected(inputs)
	if (locale === "pt") return pt_upload_game_builds_selected(inputs)
	if (locale === "ru") return ru_upload_game_builds_selected(inputs)
	if (locale === "sv") return sv_upload_game_builds_selected(inputs)
	if (locale === "tr") return tr_upload_game_builds_selected(inputs)
	if (locale === "zh") return zh_upload_game_builds_selected(inputs)
	if (locale === "ja") return ja_upload_game_builds_selected(inputs)
	return en_upload_game_builds_selected(inputs)
});
